import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <ul className="menu menu-horizontal p-0">
          <li className={router.pathname === '/' ? 'bordered' : ''}>
            <Link href="/">
              <a>Live Boadcasts</a>
            </Link>
          </li>
          <li className={router.pathname === '/articles' ? 'bordered' : ''}>
            <Link href="/articles">
              <a>Articles</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <span className="normal-case text-2xl">DEWS</span>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0 mr-3">
          <li className={router.pathname === '/cabin' ? 'bordered' : ''}>
            <Link href="/cabin">
              <a>Editor's Cabin</a>
            </Link>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
