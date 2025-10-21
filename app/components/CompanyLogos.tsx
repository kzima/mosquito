import Image from 'next/image'

export default function CompanyLogos() {
  const logos = [
    { src: 'https://adqlntodm0ka5min.public.blob.vercel-storage.com/mosquito/img/plug-logo-HqOJX7yhGM2E0vqmMvr3SSShvER4gu', alt: 'Get Plug' },
    { src: 'https://adqlntodm0ka5min.public.blob.vercel-storage.com/mosquito/img/rentalbay-logo-YmHQeAkD0eHR1FceMlCfsdoNUcJYdT.svg', alt: 'Rental Bay' },
    { src: 'https://adqlntodm0ka5min.public.blob.vercel-storage.com/mosquito/img/stash-logo-nWqh0eajIDWu0RpJ6Ev5Xi6V2YDoTv', alt: 'Stash Property' },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={0}
              height={0}
              style={{ width: 'auto', height: '50px' }}
              className="opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
