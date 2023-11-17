import Image from 'next/image';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
return (
    <main className="min-h-screen flex flex-col items-center text-neutral-600 ">
        <Image
            src='gconnect-logo.svg'
            alt='GConnect Logo'
            width={120}
            height={120}
            className='my-10 w-24 lg:w-32'
        />
        {children}
    </main>
);
}