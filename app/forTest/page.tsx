import Link from "next/link";

export default function Example() {
  return (
    <div>
      <div><Link href={"/forTest/myPage"}>My page</Link></div>
      <div><Link href={"/forTest/tailwindPage"}>Tailwind Example Page</Link></div>
    </div>
  );
}
