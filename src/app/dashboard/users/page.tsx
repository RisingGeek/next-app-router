import Link from "next/link";

export default function UsersPage() {
  return (
    <div>
      <p>Users page</p>
      <Link href="/ideas">
        go to ideas page
      </Link>
    </div>
  )
}