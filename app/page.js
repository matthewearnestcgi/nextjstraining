import Image from "next/image";
import RootLayout from "/app/layout";

export default function Home() {
  return (
         <RootLayout>
            <div>
                <h1>Welcome to my Next.js App</h1>
                <p>This app demonstrates various functionalities.</p>
            </div>
        </RootLayout>
  );
}