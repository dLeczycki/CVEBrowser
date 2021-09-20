import {
  Document, Packer, Table, TableRow, TableCell, Paragraph, TextRun, WidthType, AlignmentType,
} from 'docx';
import { saveAs } from 'file-saver';

const VULNERABILITY_COLOR = {
  CRITICAL: { fill: '000000', color: 'ffffff' },
  HIGH: { fill: 'e53e3e', color: '000000' },
  MEDIUM: { fill: 'd69e2e', color: '000000' },
  LOW: { fill: 'f6e05e', color: '000000' },
  NOT_SUPPLIED: { fill: 'aaaaaa', color: 'ffffff' },
};

class DocumentGenerator {
  static generateBulletin(cveList, translations) {
    const cveTables = cveList.reduce((accumulated, cve) => {
      const { fill, color } = VULNERABILITY_COLOR[cve.cvssV3Metric.baseSeverity];
      const emptyParagraph = new Paragraph({});

      const cveIdCell = new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: cve.cveId,
                bold: true,
                size: 24,
              }),
            ],
          })],
        width: {
          size: 5000,
          type: WidthType.DXA,
        },
      });
      const metricCell = new TableCell({
        children: [
          new Paragraph({
            text: `CVSSv3: ${cve.cvssV3Metric.baseScore} ${translations.severityT[cve.cvssV3Metric.baseSeverity.toLowerCase()].toUpperCase()}`,
            alignment: AlignmentType.CENTER,
          }),
        ],
        width: {
          size: 3000,
          type: WidthType.DXA,
        },
        shading: {
          fill,
          color,
        },
      });
      const cveIdRow = new TableRow({
        children: [
          cveIdCell,
          metricCell,
        ],
      });

      const publishedCell = new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: `${translations.publishedDateT}: `, bold: true }),
              new TextRun({ text: cve.publishedDate }),
            ],
          }),
        ],
        columnSpan: 2,
      });
      const publishedRow = new TableRow({
        children: [
          publishedCell,
        ],
      });

      const lastModifiedCell = new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: `${translations.lastModificationDateT}: `, bold: true }),
              new TextRun({ text: cve.lastModifiedDate }),
            ],
          }),
        ],
        columnSpan: 2,
      });
      const lastModifiedRow = new TableRow({
        children: [
          lastModifiedCell,
        ],
      });

      const descriptionCell = new TableCell({
        children: [
          new Paragraph({ children: [new TextRun({ text: `${translations.descriptionT}: `, bold: true })] }), new Paragraph(cve.description),
        ],
        columnSpan: 2,
      });
      const descriptionRow = new TableRow({
        children: [
          descriptionCell,
        ],
      });

      // let problemTypes;
      // if (cve.problemTypes.length > 1) {
      //   problemTypes = cve.problemTypes.map((type) => new Paragraph(type.description.value));
      // } else problemTypes = new Paragraph();
      // const problemTypesCell = new TableCell({
      //   children: [
      //     new Paragraph({
      //       children: [
      //         new TextRun({ text: 'Problem Types: ', bold: true }),
      //       ],
      //     }),
      //     ...problemTypes,
      //   ],
      //   columnSpan: 2,
      // });
      // const problemTypesRow = new TableRow({
      //   children: [
      //     problemTypesCell,
      //   ],
      // });

      const referencesHyperlinks = cve.references.map((reference) => new Paragraph({
        children: [
          new TextRun({
            text: reference,
            style: 'Hyperlink',
          }),
        ],
      }));
      const referencesCell = new TableCell({
        children: [
          new Paragraph({ children: [new TextRun({ text: `${translations.referencesT}: `, bold: true })] }),
          ...referencesHyperlinks,
        ],
        columnSpan: 2,
      });
      const referencesRow = new TableRow({
        children: [
          referencesCell,
        ],
      });

      const cveTable = new Table({
        rows: [
          cveIdRow,
          publishedRow,
          lastModifiedRow,
          descriptionRow,
          // problemTypesRow,
          referencesRow,
        ],
      });

      accumulated.push(cveTable);
      accumulated.push(emptyParagraph);
      return accumulated;
    }, []);

    const bulletin = new Document({
      styles: {
        paragraphStyles: [
          {
            id: 'normal',
            name: 'Normal',
            quickFormat: true,
            paragraph: {
              spacing: {
                before: 120,
                after: 120,
              },
            },
            run: {
              font: 'Arial',
              size: 20,
            },
          },
        ],
      },
      sections: [{
        children: [
          ...cveTables,
        ],
      }],
    });

    return bulletin;
  }

  static saveDocumentToFile(file, filename) {
    Packer.toBlob(file).then((fileBlob) => {
      saveAs(fileBlob, filename);
    });
  }
}

export default DocumentGenerator;
