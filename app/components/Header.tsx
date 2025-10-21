import Image from 'next/image'

export default function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-center">
        <Image
          src="/images/design-mode/logo.png"
          alt="AI Consulting Logo"
          width={200}
          height={50}
          priority
        />
      </div>
    </header>
  )
}
