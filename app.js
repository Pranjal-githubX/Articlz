console.log("Welcome");
const container = document.querySelector(".container");

const blogs = [
    {
        title: `Subtle Signs That Reveal People Admire You`,
        dated: "7 Dec, 2024",
        tags: ["Relationships", "Self-Improvement"],
        src: "./Article 1/index.html"
    },
    {
        title: `2025 Resolutions for better Career, Finance, Health`,
        dated: "12 Dec, 2024",
        tags: ["Productivity", "Money", "Career", "Health"],
        src: "./Article2/index.html"
    }
];

container.innerHTML = ""
function generate() {
    for (let elem of blogs) {
        // Create the article container
        let article = document.createElement("div");
        article.classList.add("article");

        // Create and append the title with link
        let h2 = document.createElement("h2");
        h2.classList.add("blogTitle");
        const link = document.createElement("a");
        link.innerText = elem["title"];
        link.href = elem["src"];
        h2.append(link);
        article.append(h2);

        // Create and append the bottom section
        let btm = document.createElement("div");
        btm.classList.add("btm");

        // Add date
        let h3 = document.createElement("h3");
        h3.innerText = elem["dated"];
        btm.append(h3);

        // Add divider
        let divider = document.createElement("span");
        divider.id = "divider";
        divider.innerText = "|";
        btm.append(divider);

        // Add tags
        let tagsDiv = document.createElement("div");
        tagsDiv.classList.add("tags");
        for (let tag of elem["tags"]) {
            let tagSpan = document.createElement("span");
            tagSpan.innerText = tag;
            tagsDiv.append(tagSpan);
        }
        btm.append(tagsDiv);

        article.append(btm);

        // Append the article to the container
        container.append(article);
    }
}

generate();
