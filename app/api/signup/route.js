import { NextResponse } from "next/server";
import { User } from "@/models/user";


export async function DELETE(req){
    console.log(req.nextUrl.searchParams.get("abc"))

    // /api/signup?d=10&city=fsd

    /////query param se data ota deta hai s wjw se use krta hai
    let id = req.nextUrl.searchParams.get("abc");

// let id = req.nextUrl.searchParams.get("city");//fsd

//    mongoose may iD ki zarye record ko delete kr dete hai
    await User.findByIdAndDelete(id)

      // request ka answer back krna
     return NextResponse.json({success:true})
}

export async function PUT(req){

    // anne wale data ko pakar lete hai
    let data = await req.json();
    console.log(data);
    await User.findByIdAndUpdate(data._id,data);

    // request ka answer ko back krne kilye neche sentence use krte hai
    return NextResponse.json({success:true})
}
export async function GET(req){
    let meraUsers = await User.find();

     // request ka answer back krna
    return NextResponse.json({users:meraUsers})

}

export async function POST(req){

    let data = await req.json();
    console.log(data);
    let nayaUser = new User(data)
    await nayaUser.save();
    console.log('code chala hai success')

    return NextResponse.json({
        success:true
    });
}