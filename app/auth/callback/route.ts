import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest){
    //認証用コードを使ってセッションを確立する
    //urlを取得する
    const reqUrl = new URL(request.url);
    const code = reqUrl.searchParams.get("code");

    if(code){
        const supbase = createRouteHandlerClient({cookies});
        await supbase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(reqUrl.origin)
}