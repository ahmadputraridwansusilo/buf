export default function Footer() {
  return (
    <footer className="py-8 bg-background/80 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 overflow-hidden">
                <div className="absolute inset-0 bg-primary rounded-full opacity-20">

                </div>
           
              <img src="buf.png" alt="buf" />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-foreground/60 text-sm">&copy; {new Date().getFullYear()} Buf AI. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

