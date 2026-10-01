import { brand, ui } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()} {brand}
      </p>
      <p>{ui.builtWith}</p>
    </footer>
  )
}
