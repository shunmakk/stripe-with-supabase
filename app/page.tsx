import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

  // Supabaseクライアントをサーバーコンポーネントで初期化
const supabase = createServerComponentClient({ cookies });

const GetAll = async () => {
  const { data: stripeSupabase, error  } = await supabase.from("stripe").select("*");
  return  stripeSupabase;
  }


//日付の正規化
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // 月は0から始まるため+1
  const day = date.getUTCDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default async function Home() {


  // stripeテーブルからデータを取得
  const lessons = await GetAll();
  console.log(lessons);

  return (
    <main className="w-full max-w-3xl mx-auto my-16 px-2">
      <div className="flex flex-col gap-3">
      {lessons?.map((lesson) => (
        <Link href={`/${lesson.id}`} key={lesson.id}>
          <Card>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{lesson.description}</p>
              <p>投稿日：{formatDate(lesson.created_at)}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
      </div>
    </main>
  );
}
