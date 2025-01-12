import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="p-4 w-full h-24 border-b-2 border-sky-500 flex items-center justify-around">
      <section>
        <h1 className="text-xl font-bold">Appmak</h1>
      </section>
      <section>
        <ul className="flex items-center space-x-3">
          {[
            ["About", "/#about"],
            ["Contacts", "/#contacts"],
            ["Sign up", "/sign-up"],
          ].map(([tag, href], index) => {
            return (
              <Link key={index} href={href} className="text-md">
                {tag}
              </Link>
            );
          })}
        </ul>
      </section>
    </nav>
  );
};
