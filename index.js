  async function handleFormSubmit(event) { 
  getAddressByCep()
  getPrevisao()
}

      async function getAddressByCep() {
        const cep = document.getElementById('cep').value;
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          const data = await response.json();
          console.log(data);
          document.getElementById('endereco').innerText = data.logradouro;
          document.getElementById('bairro').innerText = data.bairro;
          document.getElementById('cidade').innerText = data.localidade;
        } catch (error) {
          alert(error.message);
        }
        
      }

      async function getPrevisao() {
        const lat = document.getElementById('latitude').value;
        const lon = document.getElementById('longitude').value;
        try {
          const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`);
          const data = await response.json();
          console.log(data);
          const temperatura = data.current.temperature_2m
          document.getElementById('temperatura').innerText = `Previsão de tempo de acordo com a região:${temperatura}°C`;
        } catch (error) {
          alert(error.message);
        }
        
      }