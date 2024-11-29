/**
 * Stwórz typ FileExtension, który będzie reprezentował rozszerzenia plików:
 * ".jpg", ".png" lub ".gif". Następnie sutwórz typ FileName, który będzie
 * łączył dowolny string z jednym z tych rozszerzeń.
 */
type FileExtension = 'jpg' | 'png' | 'gif'; // change me
type FileName = `${string}.${FileExtension}`; // change me

// example usage:
const file1: FileName = 'vacation_photo.jpg'; // Poprawne
const file2: FileName = 'document.pdf'; // Błąd - niepoprawne rozszerzenie
