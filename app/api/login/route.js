import { User } from "@/models/user";
import { NextResponse } from "next/server";


export async function PUT(req){

    let data = await req.json();
    let user = await User.findOne(data);
    return NextResponse.json(user || null)
}