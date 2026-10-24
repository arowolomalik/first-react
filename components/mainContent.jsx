export default function MainContent() {
    return(
        <>
        <main className=" bg-[url('/src/assets/react-half.png')] bg-no-repeat bg-right ">
            <h1 className=" font-inter font-bold tracking-tight text-[39px] pl-[27px] mb-[46px]">Fun Facts about React</h1>
            <ul className=" list-disc pl-[51px] font-inter text-[16px] font-normal ">
                <li className="mb-[20px] pl-[13px] marker:text-[#61DAFB] marker:text-2xl" >Was first released in 2013</li>
                <li className="mb-[20px] pl-[13px] marker:text-[#61DAFB] marker:text-2xl">Was originally created by Jordan Walke</li>
                <li className="mb-[20px] pl-[13px] marker:text-[#61DAFB] marker:text-2xl">Has well over 200K stars on GitHub</li>
                <li className="mb-[20px] pl-[13px] marker:text-[#61DAFB] marker:text-2xl">Is maintained by Meta</li>
                <li className="mb-[20px] pl-[13px] marker:text-[#61DAFB] marker:text-2xl">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
        </>
    )
}
    
