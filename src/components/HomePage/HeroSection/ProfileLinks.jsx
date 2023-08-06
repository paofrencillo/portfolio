import links from "../../../data/profileLinks";

export default function ProfileLinks() {
  const profileLinks = links();

  return (
    <div className="flex justify-start items-center gap-4">
      {profileLinks.map((plink) => {
        return (
          <a
            href={plink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 cursor-pointer hover:text-white"
            key={plink.id}
          >
            <div className={plink.classDiv}>{plink.icon}</div>
          </a>
        );
      })}
    </div>
  );
}
