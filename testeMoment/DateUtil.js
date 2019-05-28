export default class DateUtil {
  _adicionarZero(valor) {
    return valor <= 9 ? `0${valor}` : valor;
  }

  dataParaTextoTraco(dataHora) {
    return new Date(dataHora).toISOString().split("T")[0];
  }

  dataParaTextoBarras(data) {
    return `${this._adicionarZero(data.getDate())}/${this._adicionarZero(
      data.getMonth() + 1
    )}/${data.getFullYear()}`;
  }

  horaParaTexto(data) {
    return `${this._adicionarZero(data.getHours())}:${this._adicionarZero(
      data.getMinutes()
    )}:${this._adicionarZero(data.getSeconds())}`;
  }

  converterDataHoraBancoParaDate(dataHora) {
    date = String(dataHora).split("T");

    let days = String(date[0]).split("-");
    let hours = String(date[1]).split(":");

    return new Date(
      parseInt(days[0]),
      parseInt(days[1]) - 1,
      parseInt(days[2]),
      parseInt(hours[0]),
      parseInt(hours[1]),
      parseInt(hours[2])
    );
  }

  dataHoraParaTexto(dataHora) {
    return `${this.dataParaTextoBarras(dataHora)} ${this.horaParaTexto(dataHora)}`;
  }

}
