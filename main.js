// Get Our Ranger Data
const getData = async () => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks?page=77&limit=5&fields=id,title,artist_title,date_end`)
    console.log(response.data.data)
    return response.data.data
}
//Each art peice needs its own whole entire code because otherwise every drop-list appears by the first button only

///////////////1111111111111111111111111111111///////////////////////////
const DOM_Elements1 = {
    art_info1: '.art-info1',
}
const load_data1 = async () => {
    const artData1 = await getData();
    const html = `<a href ="#" class="list-group-item">
    <pre style="color:black; font-family:helvetica">
        Title: ${artData1[0].title}\n
        Artist: ${artData1[0].artist_title}\n
        Year Completed: ${artData1[0].date_end}
    </pre>    
    </a>`;
    document.querySelector(DOM_Elements1.art_info1).insertAdjacentHTML('beforeend', html);
}
const clear_data1 = () => {
    document.querySelector(DOM_Elements1.art_info1).innerHTML = '';
}

///////////////////////222222222222222222222222222////////////////
const DOM_Elements2 = {
    art_info2: '.art-info2',
}
const load_data2 = async () => {
    const artData2 = await getData();
    
    const html = `<a href ="#" class="list-group-item">
    <pre style="color:black; font-family:helvetica">   
        Title: ${artData2[1].title}\n
        Artist: ${artData2[1].artist_title}\n
        Year Completed: ${artData2[1].date_end}
    </pre>    
    </a>`;
    document.querySelector(DOM_Elements2.art_info2).insertAdjacentHTML('beforeend', html);
}
const clear_data2 = () => {
    document.querySelector(DOM_Elements2.art_info2).innerHTML = '';
}
///////////////////////3333333333333333333333/////////////
const DOM_Elements3 = {
    art_info3: '.art-info3',
}
const load_data3 = async () => {
    const artData3 = await getData();
    
    const html = `<a href ="#" class="list-group-item">
    <pre style="color:black; font-family:helvetica">   
        Title: ${artData3[2].title}\n
        Artist: ${artData3[2].artist_title}\n
        Year Completed: ${artData3[2].date_end}
    </pre>    
    </a>`;
    document.querySelector(DOM_Elements3.art_info3).insertAdjacentHTML('beforeend', html);
}
const clear_data3 = () => {
    document.querySelector(DOM_Elements3.art_info3).innerHTML = '';
}
///////////////////4444444444444444444444444444////////////////////
const DOM_Elements4 = {
    art_info4: '.art-info4',
}
const load_data4 = async () => {
    const artData4 = await getData();
    
    const html = `<a href ="#" class="list-group-item">
    <pre style="color:black; font-family:helvetica">   
        Title: ${artData4[3].title}\n
        Artist: ${artData4[3].artist_title}\n
        Year Completed: ${artData4[3].date_end}
    </pre>    
    </a>`;
    document.querySelector(DOM_Elements4.art_info4).insertAdjacentHTML('beforeend', html);
}
const clear_data4 = () => {
    document.querySelector(DOM_Elements4.art_info4).innerHTML = '';
}
/////////////////////555555555555555555555555///////////////////////////////
const DOM_Elements5 = {
    art_info5: '.art-info5',
}
const load_data5 = async () => {
    const artData5 = await getData();
    
    const html = `<a href ="#" class="list-group-item">
    <pre style="color:black; font-family:helvetica">   
        Title: ${artData5[4].title}\n
        Artist: ${artData5[4].artist_title}\n
        Year Completed: ${artData5[4].date_end}
    </pre>    
    </a>`;
    document.querySelector(DOM_Elements5.art_info5).insertAdjacentHTML('beforeend', html);
}
const clear_data5 = () => {
    document.querySelector(DOM_Elements5.art_info5).innerHTML = '';
}