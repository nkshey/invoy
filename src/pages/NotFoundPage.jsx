import HomeButton from "../ui/buttons/HomeButton";
import NotFoundIllustartion from "../ui/icons/NotFoundIllustration";

function NotFoundPage() {
  return (
    <main className="mx-auto max-w-[64rem] p-8 lg:p-12">
      <HomeButton />

      <div className="grid min-h-[calc(100dvh-5.1875rem)] place-items-center pb-[1.125rem] lg:min-h-[calc(100dvh-7.75rem)] lg:pb-7">
        <NotFoundIllustartion />
      </div>
    </main>
  );
}

export default NotFoundPage;
