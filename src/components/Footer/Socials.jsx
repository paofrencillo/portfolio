import links from "../../data/profileLinks";

export default function Socials() {
  const profileLinks = links();

  return (
    <div className="flex justify-between items-center gap-1">
      {profileLinks.map((plink) => {
        return (
          <a
            href={plink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-white"
            key={plink.id}
          >
            <div className={plink.classDiv}>{plink.icon}</div>
          </a>
        );
      })}
    </div>
  );
}
