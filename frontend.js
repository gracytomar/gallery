const galleryData = [
    {
        url: "https://ik.imagekit.io/Gracy/demo/Safari%20was%20a%20roaring%20success%20__.jpg?updatedAt=1735722242438",
        title: "Safari Adventure",
        description: "An exhilarating safari experience."
    },
    {
        url: "https://ik.imagekit.io/Gracy/demo/Mata%20veshnodevi%20jammu%20katra.jpg?updatedAt=1735722242419",
        title: "Mata Vaishno Devi",
        description: "A spiritual journey to Vaishno Devi."
    },
    {
        url: "https://ik.imagekit.io/Gracy/demo/c9ac30b7-4142-4b6f-9d51-4348b8dbab24.jpg?updatedAt=1735722242363",
        title: "Serene Landscape",
        description: "A beautiful and peaceful view."
    },
    {
        url: "https://ik.imagekit.io/Gracy/demo/3b7eccdd-51da-4eb5-8927-0d883442a977.jpg?updatedAt=1735722242370",
        title: "Mountain Peaks",
        description: "Majestic mountains under the clear sky."
    },
    {
        url: "https://ik.imagekit.io/Gracy/demo/2aeeea71-a6a0-43d0-932f-2ae6ce1c6b32.jpg?updatedAt=1735722242338",
        title: "Sunset Glory",
        description: "A breathtaking view of the sunset."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.backgroundColor = '#f4f4f4';

    const title = document.createElement('h1');
    title.textContent = 'Image Gallery';
    title.style.textAlign = 'center';
    title.style.padding = '20px';
    body.appendChild(title);

    const gallery = document.createElement('div');
    gallery.style.display = 'grid';
    gallery.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    gallery.style.gap = '20px';
    gallery.style.padding = '20px';
    body.appendChild(gallery);

    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.style.backgroundColor = 'white';
        galleryItem.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        galleryItem.style.overflow = 'hidden';
        galleryItem.style.borderRadius = '8px';

        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.title;
        img.style.width = '100%';
        img.style.height = 'auto';
        galleryItem.appendChild(img);

        const imgTitle = document.createElement('h3');
        imgTitle.textContent = item.title;
        imgTitle.style.textAlign = 'center';
        imgTitle.style.padding = '10px';
        imgTitle.style.margin = '0';
        imgTitle.style.backgroundColor = '#333';
        imgTitle.style.color = 'white';
        galleryItem.appendChild(imgTitle);

        const imgDescription = document.createElement('p');
        imgDescription.textContent = item.description;
        imgDescription.style.padding = '10px';
        imgDescription.style.textAlign = 'center';
        galleryItem.appendChild(imgDescription);

        gallery.appendChild(galleryItem);
    });
});
