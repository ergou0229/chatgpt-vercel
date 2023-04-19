import { usePrefersDark } from "@solid-primitives/media"
import { createEffect } from "solid-js"
import { LocalStorageKey } from "~/types"

export default function ThemeToggle() {
  const prefersDark = usePrefersDark()
  function toggle(flag: boolean) {
    document.documentElement.classList.toggle("dark", flag)
    document
      ?.querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", flag ? "#16161a" : "#f6f8fa")
  }

  createEffect(() => {
    !localStorage.getItem(LocalStorageKey.THEME) && toggle(prefersDark())
  })

  function handleToggleTheme() {
    const element = document.documentElement
    element.classList.toggle("dark")
    const isDark = element.classList.contains("dark")
    document
      ?.querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? "#16161a" : "#f6f8fa")
    localStorage.setItem(LocalStorageKey.THEME, isDark ? "dark" : "light")
  }

  return (
    <button
      id="theme-toggle"
      class="flex items-center justify-center w-10 h-10 rounded-md border transition-colors border-0 hover:animate-rubber-band"
      onClick={handleToggleTheme}
    >
      
      
      
      
      
    </button>
  )
}
