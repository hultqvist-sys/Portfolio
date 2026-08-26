import { setWasmUrl } from '@lottiefiles/dotlottie-react/webgl'
// Subpath comes from the package's own exports map — the file lives at
// dist/webgl/dotlottie-player.wasm but only this specifier is exported.
import wasmUrl from '@lottiefiles/dotlottie-web/webgl/dotlottie-player.wasm?url'

/**
 * Point the dotLottie WebGL renderer at a self-hosted WASM binary.
 *
 * By default @lottiefiles/dotlottie-web fetches its player from jsdelivr
 * (falling back to unpkg), which makes the animations depend on a third-party
 * CDN at runtime. The `?url` import makes Vite emit the binary as a normal
 * hashed asset instead, so it's served from our own origin and cached with
 * everything else.
 *
 * Note this is the WebGL build's binary, and it must be paired with the WebGL
 * build's `setWasmUrl` — the two renderers keep separate module-level state, so
 * setting the URL on one does nothing for the other.
 *
 * Imported for its side effect — must run before the first player mounts.
 */
setWasmUrl(wasmUrl)
