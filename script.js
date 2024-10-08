const formConvert = document.getElementById('form-convert');
const fileMp4 = document.getElementById('file-mp4');
const btnConvert = document.getElementById('btn-convert');
const result = document.getElementById('result');

formConvert.addEventListener('submit', (e) => {
  e.preventDefault();
  const file = fileMp4.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const link = reader.result;
    result.innerHTML = `<a href="${link}" target="_blank">Link MP4</a>`;
  };
  reader.readAsDataURL(file);
});
