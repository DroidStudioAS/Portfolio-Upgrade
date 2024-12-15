export class Project {
  constructor({
    name,
    type,
    category,
    image,
    shortDescription,
    fullDescription,
    techStack,
    role,
    onGithub,
    isLive,
    githubUrl,
    liveUrl,
    sortOrder = 999 // Default to high number for unsorted items
  }) {
    this.name = name;
    this.type = type; // 'Website' or 'Mobile App'
    this.category = category; // 'professional' or 'personal'
    this.image = image;
    this.shortDescription = shortDescription;
    this.fullDescription = fullDescription;
    this.techStack = techStack;
    this.role = role;
    this.onGithub = onGithub;
    this.isLive = isLive;
    this.githubUrl = githubUrl;
    this.liveUrl = liveUrl;
    this.sortOrder = sortOrder;
  }

  // Helper methods to check if links should be displayed
  hasGithubLink() {
    return this.onGithub && this.githubUrl;
  }

  hasLiveLink() {
    return this.isLive && this.liveUrl;
  }
} 