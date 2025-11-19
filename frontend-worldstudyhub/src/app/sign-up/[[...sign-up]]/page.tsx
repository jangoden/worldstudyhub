import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex justify-center">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
