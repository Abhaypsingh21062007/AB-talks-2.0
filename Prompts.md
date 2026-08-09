# ABTalks — AI Usage Log

This file documents the AI-assisted development process used to design and build the ABTalks redesign.

The project was developed using AI-assisted vibe coding with Google Antigravity.

---

## 1. Initial Project Brief

### Prompt

I want to design and build a polished, production-quality mobile-first web application called "ABTalks".

ABTalks runs a 60-day coding challenge for Indian college students.

Students choose a coding track, build something every day, and submit:

- A GitHub repository/commit
- A LinkedIn post

The platform should help students build consistency, ship projects, create public proof of work, improve their GitHub and LinkedIn presence, and become more visible to recruiters.

The primary viewport is 390px because most students use the platform on their phones.

The required routes are:

/
/dashboard
/day/12

The landing page should explain ABTalks and motivate students to join.

The dashboard should show:

- Current streak
- Today's task
- Challenge progress
- Overall completion
- Achievements
- Student standing

The challenge day page should allow students to:

- Read the day's task
- Understand what needs to be built
- Submit GitHub proof
- Submit LinkedIn proof

Authentication, database, recruiter dashboard, admin panel, and real GitHub/LinkedIn APIs are out of scope.

Use mocked data.

---

## 2. Landing Page Design

### Prompt

Design and build the ABTalks landing page at `/`.

The page should be mobile-first and optimized for 390px width.

Include:

- Strong hero section
- 60-day challenge explanation
- Why ABTalks
- How it works
- Coding tracks
- 60-day journey
- Social proof
- Final CTA
- Footer

Use a modern dark-first visual design with a subtle electric green/lime accent.

Avoid excessive gradients, glassmorphism, and unnecessary animations.

---

## 3. Dashboard Design

### Prompt

Build the student dashboard at `/dashboard`.

The dashboard should answer:

"What do I need to do today?"

Include:

- Personalized greeting
- Day 12 of 60
- Current streak
- 7-day streak visualization
- Today's build
- Challenge progress
- Overall statistics
- Achievements
- Student standing
- Upcoming challenge
- Mobile bottom navigation

Add a thoughtful feature called "Tonight's Focus".

Show:

10 min — Understand
25 min — Build
10 min — Document

The purpose is to help students who use the platform late at night after college.

---

## 4. Challenge Day

### Prompt

Build `/day/12`.

The page should include:

- Day progress
- Challenge title
- Description
- Difficulty
- Estimated time
- Today's mission
- Success criteria
- Bonus challenge
- GitHub proof submission
- LinkedIn proof submission
- Submission status
- Completion state

Use frontend-only mocked verification.

When both GitHub and LinkedIn proof are submitted, show:

"Day 12 complete 🎉"

---

## 5. Edge Cases

### Prompt

Add realistic UI states for:

1. First day with zero streak
2. Missed challenge day
3. Empty student profile
4. Missing GitHub submission
5. Missing LinkedIn submission

The missed-day experience should be supportive.

Use messaging such as:

"Your streak ended. Your journey didn't."

---

## 6. Mobile Optimization

### Prompt

Review the entire application at 390px width.

Fix:

- Horizontal overflow
- Small text
- Touch target sizes
- Bottom navigation overlap
- Button sizing
- Input sizing
- Mobile spacing
- Content hierarchy

Also check 375px and 430px widths.

---

## 7. Interaction Improvements

### Prompt

Add frontend-only interactions for:

- Start challenge
- Open today's challenge
- GitHub submission
- LinkedIn submission
- Checklist completion
- Day completion
- Navigation

Use React state/localStorage where appropriate.

No backend is required.

---

## 8. Visual QA

### Prompt

Act as a senior product designer and review the entire application.

Inspect:

/
/dashboard
/day/12

at 390px width.

Improve:

- Typography
- Spacing
- Alignment
- Visual hierarchy
- CTA visibility
- Card density
- Streak visualization
- Progress visualization
- Submission UX
- Empty states
- Missed-day states
- Overall consistency

The final result should feel like a polished startup product rather than an AI-generated template.

---

## 9. Final QA

### Prompt

Perform a final quality check.

Verify:

- All required routes work
- No horizontal scrolling
- No broken layout
- No overflowing text
- No clipped buttons
- No overlapping navigation
- No console errors
- Forms work
- Mock submission states work
- Navigation works
- Mobile layout works
- Desktop layout works

Do not change the required routes:

/
/dashboard
/day/12