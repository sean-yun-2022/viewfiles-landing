export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold text-base">View Files</span>
          <span>·</span>
          <span>© 2026</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:support@viewfiles.app" className="hover:text-white/60 transition-colors">support@viewfiles.app</a>
          <a href="#faq" className="hover:text-white/60 transition-colors">FAQ</a>
          <a href="#pricing" className="hover:text-white/60 transition-colors">Pricing</a>
        </div>
      </div>
    </footer>
  );
}
