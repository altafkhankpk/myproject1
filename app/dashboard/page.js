import Link from "next/link"
export default()=>{
    return <><a>
        Open Product 
        <Link href="./create-product">Link</Link></a>
        <br></br>
        <br></br>
        <a>
        Open Customer
        <Link href="./create-customer">Link</Link></a>
        </>
}