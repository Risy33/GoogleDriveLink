//Create Varsiables
const glink = <HTMLInputElement>document.getElementById('glink'); //input field
const btn = <HTMLElement>document.getElementById('btn'); //button
const downloadLink = <HTMLInputElement>document.getElementById('download-link'); //text-area

btn.addEventListener('click', generateLink);

function generateLink(e) {
  e.preventDefault();
  //   console.log(glink.value)

  const glinkValue = glink.value;
  const confirmedLink = glink.value.includes(
    'https://drive.google.com/file/d/'
  );

  if (confirmedLink) {
    const getDownloadLink = glinkValue
      .replace(
        'https://drive.google.com/file/d/',
        'https://drive.google.com/uc?export=download&id='
      )
      .replace('/view?usp=share_link', '');

    downloadLink.value = getDownloadLink;

    function copyText(target: HTMLInputElement) {
      if (target.value === '') {
        alert('Please generate a download link');
      } else {
        navigator.clipboard.writeText(target.value).then(() => {
          alert('Link has been copied to clipboard');
        });
      }
    }

    const copy = <HTMLElement>document.querySelector('.copy');
    copy.addEventListener('click', () => {
      return copyText(downloadLink);
    });

    // Embed Audio function
    const audio1 = '<audio width="300" height="32" controls="controls" src="';
    const audio2 = '" type="audio/mp3"></audio>';
    const embedAudio = <HTMLInputElement>document.getElementById('embed-audio');
    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`; //text inside the text-area
   
    //COPY AUDIO EMBED CODE
    const copyAudio = <HTMLInputElement>document.querySelector('.copy-audio');
    copyAudio.addEventListener('click', () => {
      return copyText(embedAudio);
    });

    //EMBED VIDEO
    const getVideoLink = glink.value.replace('/view?usp=share_link', '');

    const video1 = '<iframe src="';
    const video2 = '/preview"width="560" height="315"> </iframe>';

    const embedVideo = <HTMLInputElement>document.getElementById('embed-video');
    embedVideo.value = `${video1}${getVideoLink}${video2}`;

    //Copy video
    const copyVideo = <HTMLInputElement>document.querySelector('.copy-video');
    copyVideo.addEventListener('click', () => {
      return copyText(embedVideo);
    });
  } else {
    alert('Please enter a google drive file link');
  }
}
