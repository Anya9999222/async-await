import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      const gameSaving = JSON.parse(jsonData);
      return new GameSaving(gameSaving);
    } catch (error) {
      return error;
    }
  }
}
