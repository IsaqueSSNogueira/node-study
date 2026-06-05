
// elements
const imgContainer = document.querySelector("#img")
const changeImgButton = document.querySelector("#changeImgButton")


const updateImg = async () => {

	const res = await fetch("https://api.thecatapi.com/v1/images/search?")
	const data = await res.json()
	const url = data[0].url;
	console.log(url)
	imgContainer.src = url
}

changeImgButton.addEventListener("click", () => {
	updateImg()
})

// initialization
updateImg()