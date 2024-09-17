import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
function Header() {
  return (
    <header>
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<Image src="/logo.svg" width="139" height="26" alt="" />
			</a>

			<ul className="flex items-center list-none space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<Image src="/ring.svg" width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<Image src="/icons/sun.svg" width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<Image src="/shopping-cart.svg" width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<LanguageSwitcher />
				</li>
			</ul>
		</nav>
	</header>
  )
}

export default Header