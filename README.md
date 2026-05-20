# Tauri + React

This template should help get you started developing with Tauri and React in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
# JobDone

JobDone is a lightweight, local-first desktop tool for job seekers who apply to many positions and do not want to accidentally apply to the same company or similar role repeatedly.

It is not another complicated job search CRM.  
It is a small local memory tool that helps you remember where you applied.

## Why JobDone?

When applying through LinkedIn, users are often redirected to company career pages or ATS platforms such as Workday, Greenhouse, Lever, Taleo, or SmartRecruiters. After filling out many similar forms, it becomes easy to forget:

- Which companies have already been applied to
- Which roles were submitted recently
- Whether a similar position has already been applied for
- Whether applying again too soon may create a negative impression

Many people solve this with Excel, Google Sheets, or Notion, but these tools require manual input and constant maintenance.

JobDone is designed for users who want something simpler:

> Capture the job page, remember the application, and warn me before I apply twice.

## Core Idea

JobDone focuses on one simple problem:

> Help high-volume job seekers avoid duplicate applications.

The app allows users to capture a job application page, extract useful information such as company name and job title, store it locally, and check whether the user has recently applied to the same company or a similar position.

## Product Positioning

JobDone is:

- Lightweight
- Local-first
- Free for core local use
- Privacy-focused
- Built for lazy tracking
- Focused on duplicate application prevention

JobDone is not intended to be a full career management platform, resume builder, or automated application bot.

## Key Features

### Local Application Memory

JobDone stores job application records locally on the user's device.

Typical records include:

- Company name
- Job title
- Location
- Application URL
- Source platform
- Application date
- Application status
- Notes
- Captured page text or screenshot reference

### Screenshot-Based Capture

Users can capture a job page using a screenshot or quick action.  
The app then extracts key information from the page and prepares a record for saving.

This allows JobDone to work across different websites, including:

- LinkedIn redirects
- Company career pages
- Workday
- Greenhouse
- Lever
- SmartRecruiters
- Other ATS platforms

### Duplicate Application Warning

Before saving a new application, JobDone checks local history and warns the user if a similar record already exists.

Possible warning cases include:

- Same company applied recently
- Similar job title under the same company
- Same application URL already saved
- Same ATS platform and company detected
- Repeated applications within a short time window

The goal is not to block the user, but to provide a clear reminder before they continue.

### Local-First Privacy

By default, JobDone does not require an account and does not upload application history to the cloud.

The user's job search data stays on their own machine unless they explicitly choose a future cloud sync option.

This makes JobDone different from cloud-based job tracking platforms.

### Simple Dashboard

JobDone provides a simple local dashboard for viewing past applications.

Users can quickly check:

- Recent applications
- Companies already applied to
- Similar roles
- Application status
- Notes and timestamps

The dashboard is designed to be simple and low-maintenance.

## Target Users

JobDone is mainly designed for:

- Students looking for internships or co-op positions
- New graduates applying to many entry-level roles
- Job seekers in North America doing high-volume applications
- Users who dislike maintaining Excel trackers
- Users who care about privacy and local storage
- Users who want a small tool instead of a full job search platform

## What Makes JobDone Different?

Many existing job tracking tools are cloud-based platforms with account systems, resume tools, AI cover letters, job boards, and full application pipelines.

JobDone takes a different approach.

| Feature | Traditional Job Trackers | JobDone |
|---|---|---|
| Product type | Full job search CRM | Small desktop utility |
| Data storage | Usually cloud-based | Local-first |
| Account required | Often yes | No for core local use |
| Main purpose | Manage full job search pipeline | Avoid duplicate applications |
| User effort | Manual tracking and status updates | Screenshot / quick capture |
| Privacy | Depends on platform policy | Local by default |
| Core value | Organization | Memory and warning |

## MVP Scope

The first version of JobDone focuses on a small but useful workflow:

1. User opens a job application page
2. User captures the page with a screenshot or quick action
3. JobDone extracts company and job information
4. JobDone checks local application history
5. JobDone warns if a duplicate or similar application is found
6. User confirms and saves the record locally
7. User can view saved applications in a simple dashboard

## Non-Goals

JobDone is intentionally not focused on the following features in the MVP:

- Automatic job application submission
- Auto-filling long application forms
- Replacing LinkedIn, Indeed, or job boards
- Full resume optimization platform
- AI cover letter generation
- Complex CRM pipeline management
- Recruiter contact management
- Cloud-only application tracking

These features may be considered later, but they are not part of the core product direction.

## Planned Architecture

JobDone is designed as a local-first desktop application.

Planned technology stack:

- Desktop UI: Tauri
- Local service: Python / FastAPI
- Local database: SQLite
- OCR and parsing: Local processing first
- Optional future cloud service: PostgreSQL-based sync and enhanced AI extraction

Basic architecture:

```text
Tauri Desktop App
        |
        v
Local API Service
        |
        v
OCR / Parser / Duplicate Checker
        |
        v
SQLite Local Database