const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC4B-HX6AGRwL87AAU8NMVHQ&part=snippet%2Cid&order=viewCount&maxResults=20'
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79ce9d256fmshc1c852c853cc3ddp12ae68jsn246a0e1d1e65',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    console.log('ESTO DEBE CARGARSE');
    console.log(data);
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);

        let view = ` ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-100">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>        
        `).slice(0).join('')}
        `;

        content.innerHTML = view;

    } catch (error) {
        console.log(error);
    }
})();