 const EMPTY_BLOG = {
	"title":"",
	"description": "",
	"author": "",
	"commentSystem" : "",
	"headerImg":"",
	"commentSource" : "",
	"pages" :[],
	"posts": []
}

const rootz = location.href.substr(0,location.href.indexOf('/',7))

async function getBlogData(allPosts) {
	let data = EMPTY_BLOG
	try {
		const res = await fetch(rootz.concat('/data/blog-data.json'));
		const text = await res.text()
		if (res.ok) {
			console.log('res ok')
			data = JSON.parse(text)
			data.singleText = !allPosts
			if(!allPosts){
				data.posts=[]
			}
		} else {
			console.log('res erro')
			data = loadError(500)
		}
	} catch (e) {
		console.log(e)
		throw new Error(`Falha ${e}`)
	}
	await console.log(JSON.stringify(data))
	return data
}
async function getTextData(params) {
	let data = await getBlogData(false)
	let path = ''
	if(Number.isInteger(params)){
		path = `../data/error/${params}.md` 
		data.allowComments = false
	}else if(params.date==undefined){
		path = `../data/pages/${params.title}.md` 
		data.allowComments = true
	}else{
		path = `../data/posts/${params.date}-${params.title}.md` 
		data.allowComments = true
	}
	data.posts=[]
	data.singleText=true
	
	try{            
		const resCont = await fetch(path);
		const txtCont = await resCont.text();
		if(resCont.ok){                                        
			data.text = txtCont
		}
	}catch(ex){
		console.error(ex)
		return getBlogData()
	}
	return data
}

export  {EMPTY_BLOG,rootz,getBlogData,getTextData}