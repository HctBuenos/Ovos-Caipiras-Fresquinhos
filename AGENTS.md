<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Use the root SiteShell for shared navigation and footer; each public content page is a separate TanStack file route with its own metadata.
- Keep WhatsApp ordering links in the browser-safe denir module; orders are confirmed through WhatsApp, not stored or priced by the site.
- Use semantic CSS tokens and shared Button controls; brand photography is an imported project asset.
