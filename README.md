# OMER J GRAPHICS — Cinematic Creative Studio

**Cinematic Studio · Light + Navy Blue · v0.2 UI prototype**

A browser-ready, single-page creative-workspace prototype with an optional Electron desktop shell for Windows. This repository is a starting point—not a finished commercial replacement for Photoshop/Photopea or a full video editor.

## Preview in your browser

- Easiest: open `index.html` directly in a modern browser.
- Or serve this folder locally with any static web server.
- The interface is self-contained; the logo is included in `assets/`.

## Run as a Windows desktop app

1. Install Node.js LTS from https://nodejs.org/.
2. Extract this repository and open a terminal in the project folder.
3. Run `npm install`.
4. Run `npm start` to launch the Electron app.
5. To attempt a Windows installer build, run `npm run dist`; output is written to `dist/` if the build completes successfully.

The Electron build and installer have not been tested on this machine. Build it on a supported Windows environment and test before distributing.

## Publish a browser preview with GitHub Pages

1. Create a new **public** repository on GitHub (for example `omer-j-graphics-cinematic-studio`).
2. Upload the contents of this folder to the repository root (upload `index.html`, not the parent folder).
3. In the repository, open **Settings → Pages**.
4. Under build/deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
5. Wait for the Pages deployment to finish. GitHub will show the public preview URL in Settings → Pages.

A workflow file is also included at `.github/workflows/pages.yml`; it can publish the static preview using GitHub Actions if Pages is configured to use GitHub Actions.

## Current working prototype interactions

- Switch between workspace sections.
- Import an image into the visual canvas.
- Change the sample canvas headline and accent color.
- Select sample layers and add a sample timeline track.
- Undo/redo the limited canvas HTML changes.
- Download a project JSON snapshot.
- Export a PNG rendering of the sample composition.
- Open the AI-provider settings demonstration modal.

## Not implemented yet (do not advertise as finished)

- Production-grade layer compositing, selections, masks, PSD import/export.
- Real video/audio playback, keyframes, timeline rendering, MP4/MOV export.
- True PDF text/object editing, merging, splitting, and page management.
- OCR engine (including offline Bengali/English OCR).
- Image-to-prompt vision model or offline local model.
- Background-removal segmentation model.
- Real OpenAI/Gemini/Claude API calls or secure API-key storage.
- Full test suite, signed installer, and release validation.

The AI/API settings are only a UI demonstration and do not send or store credentials. **Never commit API keys, tokens, passwords, or personal credentials to GitHub.**

## Security and contribution notes

- Keep provider keys out of frontend JavaScript and public repositories.
- Use a secure backend or OS credential storage before adding real API integrations.
- Test imports and exports with non-sensitive files before relying on them.

## License

MIT. See `LICENSE`.
