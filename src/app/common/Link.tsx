import Link from "next/link";

export default function sideLink({
  href,
  icon,
  children,
  isTitle = false,
}: {
  href: string;
  icon?: React.ReactElement;
  children: JSX.Element | string;
  isTitle?: boolean;
}) {
  return (
    <Link
      href={href}
      passHref
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "32px",
      }}
    >
      {icon && icon}
      <div
        style={{ marginTop: "auto", marginBottom: "auto" }}
        className={isTitle == true ? "list-item-title" : "list-item-text"}
      >
        {children}
      </div>
    </Link>
  );
}
