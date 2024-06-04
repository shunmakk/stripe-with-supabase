import React from 'react'
import { SupabaseClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/lib/database.types';




const GetDetail = async (id:number,supabase: SupabaseClient<Database>) => {
  const { data: lesson} = await supabase.from("stripe").select("*").eq("id", id).single();
  return  lesson;
  };

const DetailPage =  async  ({params}: {params: {id: number}}) => {

    const supabase = createServerComponentClient<Database>({ cookies });

    const lesson = await GetDetail(params.id,supabase);
    console.log(lesson)

  return (
    <div className='w-full  max-w-3xl mx-auto py-16 px-8'>
        <h1 className='text-3xl  mb-5'>{lesson?.title}</h1>
        <p className='mb-8'>{lesson?.description}</p>
    </div>
  )
}

export default DetailPage