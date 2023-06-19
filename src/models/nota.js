const Nota = require('./Models');

describe('Nota', () => {
  describe('mediaFinal', () => {
    it('should calculate the final average correctly', () => {
      const nota = new Nota('Disciplina', 7, 8, 9);
      expect(nota.mediaFinal()).toBe(8.2);
    });
  });

  describe('mediaCA', () => {
    it('should return "SS" for a final average between 9.0 and 10.0', () => {
      const nota = new Nota('Disciplina', 9, 9, 9);
      expect(nota.mediaCA()).toBe('SS');
    });

    it('should return "MS" for a final average between 7.0 and 8.9', () => {
      const nota = new Nota('Disciplina', 7, 7, 7);
      expect(nota.mediaCA()).toBe('MS');
    });

    it('should return "MM" for a final average between 5.0 and 6.9', () => {
      const nota = new Nota('Disciplina', 5, 5, 5);
      expect(nota.mediaCA()).toBe('MM');
    });

    it('should return "MI" for a final average between 3.0 and 4.9', () => {
      const nota = new Nota('Disciplina', 3, 3, 3);
      expect(nota.mediaCA()).toBe('MI');
    });

    it('should return "II" for a final average between 0.1 and 2.9', () => {
      const nota = new Nota('Disciplina', 1, 1, 1);
      expect(nota.mediaCA()).toBe('II');
    });

    it('should return "SR" for a final average of 0.0', () => {
      const nota = new Nota('Disciplina', 0, 0, 0);
      expect(nota.mediaCA()).toBe('SR');
    });
  });
});

    class Nota {
        constructor(disciplina, a1, a2, a3) {
            this.disciplina = disciplina;
            this.a1 = a1;
            this.a2 = a2;
            this.a3 = a3;
        }

        mediaFinal() {
            return Math.max(
                0.4 * this.a1 + 0.6 * this.a2, 
                0.4 * this.a1 + 0.6 * this.a3, 
                0.4 * this.a3 + 0.6 * this.a2
            );
        }
        mediaCA() {
            const media = this.mediaFinal();

            if (media >= 9.0 && media <= 10.0) {
            return 'SS - Superior';
            } else if (media >= 7.0 && media <= 8.9) {
            return 'MS - Médio Superior';
            } else if (media >= 5.0 && media <= 6.9) {
            return 'MM - Médio';
            } else if (media >= 3.0 && media <= 4.9) {
            return 'MI - Médio Inferior';
            } else if (media >= 0.1 && media <= 2.9) {
            return 'II - Inferior';
            } else {
            return 'SR - Sem rendimento';
            }
        }      
    }

module.exports = Nota;
