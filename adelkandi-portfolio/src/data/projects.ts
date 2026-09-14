import type {Project} from "../types/project";

export const projectsData: Project[] = [
	{
		title: "DaVinci",
		tagline: "An AI agent that turns a customer message into a dispatched job",
		description: "An autonomous AI field dispatcher for home-service teams, built at the AI Tinkerers Hackathon in Ottawa. DaVinci lives on WhatsApp, understanding text, photo, and voice messages, extracting job details, evaluating urgency, and moving work through a deterministic operational workflow. It includes Mission Control for agent activity, idempotency, and event logging to prevent duplicate actions.",
		technology: ["Next.js", "TypeScript", "OpenAI (text/vision/voice)", "Twilio WhatsApp API", "Supabase PostgreSQL", "Google Cloud Run"],
		screenshots: [],
		status: "non-hosted",
	},
	{
		title: "Event Planning Platform",
		tagline: "A full-stack event management platform built with a 3-person team",
		description: "A group project covering event creation, RSVPs, venue and attendee management, and admin moderation. Contributed across both the backend, including controllers, models, database migrations, and validation, and the frontend.",
		technology: ["C#", "ASP.NET (MVC)", "React"],
		repoUrl: "https://github.com/adelkandi/Event-Planning-Platform",
		screenshots: [],
		status: "live",
	},
	{
		title: "ITSG-33 SA&A Tracker",
		tagline: "A compliance web app built for a real government stakeholder",
		description: "A compliance application managing ITSG-33 security controls, evidence tracking, risk decisions, and Authority to Operate workflows. Built the data layer in Laravel with Blueprint YAML schema generation on a MariaDB backend.",
		technology: ["Laravel (PHP)", "MariaDB"],
		screenshots: [],
		status: "private",
	},
	{
		title: "Candela Network",
		tagline: "A network device management and monitoring tool",
		description: "A network management and monitoring platform using Netmiko for direct interaction with network devices, with real-time performance monitoring secured by authentication, access control, and encryption.",
		technology: ["React", "Flask", "PostgreSQL", "Netmiko"],
		screenshots: [],
		status: "private",
	},
	{
		title: "Plan A",
		tagline: "A full-stack task and schedule management platform",
		description: "A task and schedule management platform with authentication, a dashboard, and a responsive UI, built using the MVC pattern.",
		technology: ["PHP", "Laravel", "MVC"],
		demo: "https://plan-a.up.railway.app",
		screenshots: [],
		status: "live",
	},
	{
		title: "Home Lab",
		tagline: "A self-managed multi-device home lab",
		description: "A multi-device home lab with a desktop, mini PC, and Raspberry Pi running Linux, Pi-hole for network-wide DNS filtering, and a self-hosted web service. The infrastructure connects through an isolated Tailscale VPN mesh for secure remote access.",
		technology: ["Linux", "Docker", "Pi-hole", "Tailscale VPN"],
		screenshots: [],
		status: "private",
	},
];
