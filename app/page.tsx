import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MainPage() {
  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold">
            Thrift
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/produk" className="text-gray-700 hover:text-black">
              Produk
            </Link>
            <Link href="/harga" className="text-gray-700 hover:text-black">
              Harga
            </Link>
          </nav>
        </div>
        <Button variant="outline" className="bg-white">
          Login
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-gray-600 uppercase tracking-wide">Gaya</p>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  THRIFTING
                  <br />
                  MODERN
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  Thrifting yang Sustainable, Stylish, dan Affordable untuk gaya hidup modern
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-600">Siap untuk gaya hidup yang lebih sustainable?</p>
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">Jelajahi Koleksi</Button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Fashion item"
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/placeholder.svg?height=150&width=200"
                        alt="Fashion item"
                        width={200}
                        height={150}
                        className="w-full h-36 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/placeholder.svg?height=180&width=200"
                        alt="Fashion item"
                        width={200}
                        height={180}
                        className="w-full h-44 object-cover"
                      />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/placeholder.svg?height=160&width=200"
                        alt="Fashion item"
                        width={200}
                        height={160}
                        className="w-full h-40 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Floating product cards */}
              <div className="absolute -right-4 top-4 bg-white p-3 rounded-lg shadow-lg">
                <p className="text-xs text-gray-600">Kemeja Vintage</p>
                <p className="font-semibold">Rp 85.000</p>
              </div>

              <div className="absolute -left-4 bottom-8 bg-purple-100 p-3 rounded-lg">
                <p className="text-xs text-gray-600">Dress Retro</p>
                <p className="font-semibold">Rp 120.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Products Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">
              PRODUK <span className="text-gray-400">TERBAIK</span>
            </h2>
            <Link href="/semua" className="text-sm text-gray-600 hover:text-black">
              Semua
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=250"
                    alt="Kaos Vintage"
                    width={250}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-black">NEW</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Kaos Vintage 90s</h3>
                  <p className="text-gray-600 text-sm mb-2">Vintage Collection</p>
                  <p className="font-bold">Rp 75.000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=250"
                    alt="Kemeja Oversized"
                    width={250}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Kemeja Oversized Style</h3>
                  <p className="text-gray-600 text-sm mb-2">Modern Thrift</p>
                  <p className="font-bold">Rp 95.000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-2 border-blue-400">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=250"
                    alt="Kemeja Klasik"
                    width={250}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-yellow-400 text-black">BEST SELLER</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Kemeja - Klasik</h3>
                  <p className="text-gray-600 text-sm mb-2">Classic Collection</p>
                  <p className="font-bold">Rp 110.000</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-[#F5F3F0] to-[#E8E5E0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-6xl font-bold">35% OFF</h2>
                <div className="space-y-2">
                  <p className="text-2xl font-semibold">Only</p>
                  <p className="text-2xl font-semibold">Today</p>
                </div>
                <Button className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-3">Ambil Sekarang</Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Promo fashion"
                width={300}
                height={400}
                className="w-full max-w-sm mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 py-12 bg-[#C8E6C9]">
        <div className="max-w-md mx-auto text-center space-y-4">
          <h3 className="text-lg font-semibold">Subscribe untuk mendapatkan notifikasi produk terbaru dan best kami</h3>
          <div className="flex gap-2">
            <Input type="email" placeholder="Email kamu..." className="flex-1 bg-white" />
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold">Good Quality</h4>
              <p className="text-sm text-gray-600">Best Style For U</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Produk</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Kemeja</p>
                <p>Kaos</p>
                <p>Celana</p>
                <p>Jaket</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Brand</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Vintage</p>
                <p>Modern</p>
                <p>Classic</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Metode Pembayaran</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Transfer Bank</p>
                <p>E-Wallet</p>
                <p>COD</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            <p>Copyright © by Thrift Tee 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
