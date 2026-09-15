# Ethan Georlette — Resume / Portfolio Site

A React + Vite portfolio designed for a Computer Science student moving toward DevOps, Platform Engineering and AI Infrastructure.

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Customize

- Replace `public/profile.jpg` with your portrait.
- Replace `public/Ethan_Georlette_Resume.pdf` whenever you update the CV.
- Edit profile links, skills, experience and project data in `src/main.jsx`.
- The terminal is a **frontend-only demo**. It does not execute shell commands.

## Suggested next iterations

1. GitHub API integration for pinned repositories / recent activity.
2. Real project status cards fed from a tiny status API.
3. Prometheus/Grafana screenshots or embedded read-only dashboards after the private-cloud observability upgrade.
4. Architecture diagrams for the Family Cloud and future AWS/Terraform lab.
5. CI/CD badge and deployment history after adding GitHub Actions.
6. Deploy the site itself with Docker + Nginx, then later use Terraform on AWS.
7. Add a small AI assistant that answers questions only from your resume/project documentation (RAG).

## Why the terminal exists

DevOps portfolios often look like generic resume pages. The terminal gives the site a systems identity while staying honest: it only exposes predefined portfolio commands such as `skills`, `projects` and a simulated `docker ps` output.

## GitHub Pages deployment

A GitHub Pages workflow is included at `.github/workflows/deploy-pages.yml`.

1. Push the project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a commit or run the workflow manually from the **Actions** tab.

The Vite configuration uses relative asset paths so the site can work both on a repository Pages URL and on a custom root domain.

### Custom domain

After the first deployment, set the custom domain in **Settings → Pages → Custom domain** to `ethangeorlette.com`, then configure the domain's DNS according to GitHub Pages' apex-domain documentation. You can also point `www` to your GitHub Pages hostname and let GitHub redirect between `www` and the apex domain.
