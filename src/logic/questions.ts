export const questions = [
  // MATEMATYKA (AM, ALG, MAD, SAD)
  { q: "MATEMATYKA\nCzym są ekstrema funkcji i gradient? Jakie mają zastosowania w informatyce?", a: "Ekstrema funkcji (minima i maksima lokalne/globalne) to punkty, w których funkcja przyjmuje skrajne wartości. Gradient jest wektorem pochodnych cząstkowych wskazującym kierunek najszybszego wzrostu funkcji. W informatyce pojęcia te są kluczowe m.in. w optymalizacji, uczeniu maszynowym (gradient descent), grafice komputerowej i analizie danych." },

  { q: "MATEMATYKA\nNa czym polega wielomian i szereg Taylora funkcji rzeczywistej?", a: "Wielomian Taylora aproksymuje funkcję w otoczeniu danego punktu za pomocą wielomianu opartego na pochodnych funkcji. Szereg Taylora jest granicą takich wielomianów i pozwala lokalnie przybliżać funkcje, co ma zastosowanie w analizie numerycznej i symulacjach." },

  { q: "MATEMATYKA\nJak rozwiązuje się układy równań liniowych i ile mogą mieć rozwiązań?", a: "Układy równań liniowych można rozwiązywać metodą eliminacji Gaussa, macierzy odwrotnej, wyznaczników lub metodami iteracyjnymi. Układ może mieć jedno rozwiązanie, nieskończenie wiele rozwiązań lub nie mieć rozwiązań, w zależności od rzędu macierzy i wektora wyrazów wolnych." },

  { q: "MATEMATYKA\nCzym są wartości własne macierzy i jakie mają zastosowania w informatyce?", a: "Wartości własne to skalary, dla których istnieje niezerowy wektor własny spełniający równanie Ax = λx. Są wykorzystywane m.in. w analizie danych (PCA), grafach (centralność), grafice komputerowej i układach dynamicznych." },

  { q: "MATEMATYKA\nCzym są grafy, jakie są ich typy i metody reprezentacji?", a: "Graf to struktura złożona z wierzchołków i krawędzi. Wyróżnia się grafy skierowane, nieskierowane, ważone, acykliczne itd. Reprezentacja obejmuje macierze sąsiedztwa, listy sąsiedztwa oraz listy krawędzi." },

  { q: "MATEMATYKA\nCzym są relacje binarne, jakie mają własności i jak je reprezentować?", a: "Relacja binarna to podzbiór iloczynu kartezjańskiego zbiorów. Może mieć własności takie jak zwrotność, symetria, przechodniość. Reprezentuje się ją m.in. macierzą relacji, grafem lub listą par." },

  { q: "MATEMATYKA\nNa czym polega zasada indukcji matematycznej?", a: "Indukcja matematyczna jest metodą dowodzenia twierdzeń dla wszystkich liczb naturalnych. Składa się z kroku bazowego oraz kroku indukcyjnego, w którym zakłada się prawdziwość dla n i dowodzi dla n+1." },

  { q: "MATEMATYKA\nNa czym polega twierdzenie Bayesa?", a: "Twierdzenie Bayesa opisuje zależność między prawdopodobieństwami warunkowymi i pozwala aktualizować prawdopodobieństwo hipotezy na podstawie nowych danych. Jest podstawą statystyki bayesowskiej i uczenia maszynowego." },

  { q: "MATEMATYKA\nCzym jest testowanie hipotez statystycznych?", a: "Testowanie hipotez polega na weryfikacji założeń statystycznych na podstawie próby danych. Obejmuje hipotezę zerową, alternatywną, poziom istotności i statystykę testową." },

  { q: "MATEMATYKA\nCzym są przedziały ufności i jak się je wyznacza?", a: "Przedział ufności określa zakres, w którym z danym prawdopodobieństwem znajduje się wartość parametru populacji. Wyznacza się go na podstawie estymatora, odchylenia standardowego i poziomu ufności." },

  // BAZY DANYCH
  { q: "BAZY DANYCH\nJakie są podstawowe cechy relacyjnych baz danych?", a: "Relacyjne bazy danych opierają się na tabelach, kluczach głównych i obcych oraz relacjach między tabelami. Zapewniają spójność danych, integralność referencyjną i możliwość użycia języka SQL." },

  { q: "BAZY DANYCH\nCzym są diagramy związków encji i jakie mają znaczenie?", a: "Diagramy ER opisują strukturę bazy danych poprzez encje, atrybuty i związki. Ułatwiają projektowanie schematów i identyfikację relacji oraz kluczy." },

  { q: "BAZY DANYCH\nNa czym polega mechanizm współbieżności w systemach baz danych?", a: "Mechanizmy współbieżności umożliwiają jednoczesny dostęp wielu użytkowników do danych przy zachowaniu spójności. Stosuje się blokady, transakcje oraz poziomy izolacji." },

  { q: "BAZY DANYCH\nJakie są podstawowe obiekty i konstrukcje języka SQL?", a: "SQL obejmuje tabele, widoki, indeksy, procedury oraz instrukcje DDL, DML i DCL. Służy do definiowania, modyfikowania i zapytań o dane." },

  { q: "BAZY DANYCH\nNa czym polega optymalizacja zapytań i jaka jest rola indeksów?", a: "Optymalizacja zapytań polega na minimalizacji kosztu ich wykonania. Indeksy przyspieszają wyszukiwanie danych kosztem dodatkowej pamięci i czasu aktualizacji." },

  // TECHNIKI I ARCHITEKTURA KOMPUTERÓW
  { q: "TECHNIKI I ARCHITEKTURA KOMPUTERÓW\nCzym różni się architektura von Neumanna od maszyny Turinga?", a: "Architektura von Neumanna opisuje rzeczywisty komputer z pamięcią programu i danych, a maszyna Turinga jest modelem teoretycznym obliczeń, służącym do analizy obliczalności." },

  { q: "TECHNIKI I ARCHITEKTURA KOMPUTERÓW\nCzym jest logika boolowska i jakie ma zastosowania sprzętowe?", a: "Logika boolowska operuje na wartościach 0 i 1. Jest podstawą działania bramek logicznych i układów cyfrowych w procesorach." },

  { q: "TECHNIKI I ARCHITEKTURA KOMPUTERÓW\nJak zapisywane są liczby w systemach komputerowych?", a: "Liczby całkowite zapisuje się binarnie (np. uzupełnienie do dwóch), a rzeczywiste w formacie zmiennoprzecinkowym IEEE 754, co wiąże się z ograniczoną precyzją." },

  { q: "TECHNIKI I ARCHITEKTURA KOMPUTERÓW\nJakie są miary efektywności procesorów i systemów?", a: "Efektywność mierzy się m.in. taktowaniem, IPC, FLOPS, pojemnością pamięci oraz przepustowością systemu." },

  { q: "TECHNIKI I ARCHITEKTURA KOMPUTERÓW\nNa czym polega prawo Moore’a i jakie ma implikacje?", a: "Prawo Moore’a mówi o wykładniczym wzroście liczby tranzystorów w układach scalonych. Wpłynęło na rozwój sprzętu, ale obecnie napotyka bariery fizyczne." },

  // ALGORYTMY I STRUKTURY DANYCH
  { q: "ALGORYTMY I STRUKTURY DANYCH\nCzym jest złożoność algorytmów i klasy złożoności?", a: "Złożoność opisuje zużycie czasu i pamięci w zależności od rozmiaru danych. Klasy złożoności to m.in. O(1), O(n), O(n log n), P i NP." },

  { q: "ALGORYTMY I STRUKTURY DANYCH\nJakie są podstawowe algorytmy wyszukiwania i sortowania?", a: "Wyszukiwanie liniowe i binarne oraz sortowania: bąbelkowe, przez wstawianie, szybkie, przez scalanie. Różnią się złożonością i zastosowaniami." },

  { q: "ALGORYTMY I STRUKTURY DANYCH\nJakie są podstawowe struktury danych i ich zastosowania?", a: "Stos, kolejka, kolejka priorytetowa, Find-Union i słownik służą do organizacji danych i optymalizacji algorytmów." },

  { q: "ALGORYTMY I STRUKTURY DANYCH\nCzym są drzewa binarne i n-arne?", a: "Drzewa to hierarchiczne struktury danych. Drzewa binarne mają maksymalnie dwóch potomków, n-arne dowolną liczbę. Są wykorzystywane m.in. w wyszukiwaniu i parsowaniu." },

  { q: "ALGORYTMY I STRUKTURY DANYCH\nCzym różnią się algorytmy rekurencyjne od iteracyjnych?", a: "Rekurencja opiera się na wywołaniach samego siebie, iteracja na pętlach. Rekurencja bywa czytelniejsza, ale może zużywać więcej pamięci." },

  // METODY PROGRAMOWANIA
  { q: "METODY PROGRAMOWANIA\nJak wygląda konstrukcja obiektów i zarządzanie pamięcią w Javie i C++?", a: "Java używa garbage collectora, C++ wymaga jawnego zarządzania pamięcią lub RAII. Różni się kontrola i odpowiedzialność programisty." },

  { q: "METODY PROGRAMOWANIA\nJaka jest rola klas, interfejsów i mixinów w Javie?", a: "Klasy definiują obiekty, interfejsy kontrakty zachowania, a mixiny (przez default methods) umożliwiają współdzielenie funkcjonalności." },

  { q: "METODY PROGRAMOWANIA\nNa czym polega dziedziczenie w Javie i C++?", a: "Dziedziczenie pozwala tworzyć klasy potomne. Java wspiera pojedyncze dziedziczenie klas, C++ także wielokrotne." },

  { q: "METODY PROGRAMOWANIA\nCzym jest polimorfizm?", a: "Polimorfizm pozwala traktować obiekty klas potomnych jako obiekty klasy bazowej, umożliwiając dynamiczne wiązanie metod." },

  { q: "METODY PROGRAMOWANIA\nJakie są struktury danych w Javie i C++?", a: "Java oferuje Java Collections Framework, C++ bibliotekę STL. Zapewniają gotowe implementacje list, map, zbiorów itd." },

  { q: "METODY PROGRAMOWANIA\nNa czym polega programowanie współbieżne w Javie?", a: "Współbieżność w Javie realizuje się przez wątki, synchronizację, klasy z java.util.concurrent." },

  { q: "METODY PROGRAMOWANIA\nCzym są generics w Javie i templates w C++?", a: "Pozwalają definiować klasy i funkcje niezależne od typu danych, zwiększając bezpieczeństwo i elastyczność kodu." },

  { q: "METODY PROGRAMOWANIA\nCzym są wyrażenia lambda w Javie?", a: "Lambdy to skrócona forma zapisu funkcji anonimowych, używana z interfejsami funkcyjnymi." },

  { q: "METODY PROGRAMOWANIA\nNa czym polega przetwarzanie strumieniowe w Javie?", a: "API Stream umożliwia deklaratywne operacje na kolekcjach, takie jak map, filter i reduce." },

  { q: "METODY PROGRAMOWANIA\nJakie są narzędzia wejścia-wyjścia w Javie?", a: "Java oferuje pakiety java.io i java.nio do obsługi plików, strumieni i kanałów." },

  // INŻYNIERIA OPROGRAMOWANIA
  { q: "INŻYNIERIA OPROGRAMOWANIA\nNa czym polega zarządzanie projektem oprogramowania?", a: "Obejmuje planowanie, dobór metodyki (np. Agile, Waterfall), zarządzanie zespołem i ryzykiem." },

  { q: "INŻYNIERIA OPROGRAMOWANIA\nCzym jest UML i do czego służy?", a: "UML to język modelowania systemów, wspierający różne perspektywy projektowe." },

  { q: "INŻYNIERIA OPROGRAMOWANIA\nCzym są wzorce projektowe i frameworki?", a: "Wzorce to sprawdzone rozwiązania problemów projektowych, frameworki dostarczają gotową architekturę aplikacji." },

  { q: "INŻYNIERIA OPROGRAMOWANIA\nNa czym polega zapewnienie jakości i testowanie oprogramowania?", a: "Obejmuje testy jednostkowe, integracyjne, systemowe oraz normy jakości." },

  { q: "INŻYNIERIA OPROGRAMOWANIA\nJaką rolę pełnią wymagania w projekcie?", a: "Wymagania definiują oczekiwania wobec systemu i są podstawą projektowania oraz testów." },

  // SIECI KOMPUTEROWE
  { q: "SIECI KOMPUTEROWE\nJak działa protokół HTTP?", a: "HTTP jest protokołem warstwy aplikacji opartym na modelu żądanie–odpowiedź." },

  { q: "SIECI KOMPUTEROWE\nJakie są usługi warstwy transportu TCP?", a: "TCP zapewnia niezawodność, kontrolę przepływu i kolejność danych." },

  { q: "SIECI KOMPUTEROWE\nNa czym polega routing OSPF?", a: "OSPF to protokół routingu oparty na stanie łączy, wykorzystujący algorytm Dijkstry." },

  { q: "SIECI KOMPUTEROWE\nJak działa Ethernet lub WiFi?", a: "Zapewniają komunikację w warstwie łącza danych, definiując ramki i dostęp do medium." },

  { q: "SIECI KOMPUTEROWE\nJak chroni się informacje w bankowości internetowej?", a: "Stosuje się szyfrowanie, uwierzytelnianie wieloskładnikowe i certyfikaty." },

  // MULTIMEDIA
  { q: "MULTIMEDIA\nCzym są modele barw?", a: "Modele barw (RGB, CMYK, HSV) opisują sposób reprezentacji kolorów." },

  { q: "MULTIMEDIA\nCzym są shadery?", a: "Shadery to programy sterujące cieniowaniem i renderowaniem grafiki 3D." },

  { q: "MULTIMEDIA\nJak działa kompresja MPEG?", a: "MPEG wykorzystuje redundancję czasową i przestrzenną do redukcji danych wideo." },

  { q: "MULTIMEDIA\nCzym jest aliasing i jak się go zwalcza?", a: "Aliasing to zniekształcenie sygnału przy zbyt niskim próbkowaniu; redukuje się go przez antyaliasing." },

  { q: "MULTIMEDIA\nJakie są heurystyki Nielsena-Molicha?", a: "To zasady projektowania interfejsów poprawiające użyteczność systemów." },

  // PODSTAWY ELEKTRONIKI I TECHNIKI CYFROWEJ
  { q: "PODSTAWY ELEKTRONIKI I TECHNIKI CYFROWEJ\nJak realizuje się elementy pasywne?", a: "Rezystory, kondensatory i cewki są realizowane jako elementy dyskretne lub zintegrowane." },

  { q: "PODSTAWY ELEKTRONIKI I TECHNIKI CYFROWEJ\nCzym jest filtr RC dolnoprzepustowy?", a: "Filtr RC przepuszcza niskie częstotliwości; częstotliwość graniczna określa jego pasmo." },

  { q: "PODSTAWY ELEKTRONIKI I TECHNIKI CYFROWEJ\nCzym różni się architektura harwardzka od von Neumanna?", a: "Harwardzka rozdziela pamięć danych i programu, von Neumanna – łączy je." },

  { q: "PODSTAWY ELEKTRONIKI I TECHNIKI CYFROWEJ\nJak obsługuje się zdarzenia w mikrokontrolerach?", a: "Stosuje się przerwania, polling lub DMA." },

  { q: "PODSTAWY ELEKTRONIKI I TECHNIKI CYFROWEJ\nJakie są popularne interfejsy mikrokontrolerów?", a: "UART, SPI, I2C, CAN." },

  // SYSTEMY OPERACYJNE
  { q: "SYSTEMY OPERACYJNE\nJak klasyfikuje się systemy operacyjne?", a: "Ze względu na liczbę użytkowników, zadań, architekturę i przeznaczenie." },

  { q: "SYSTEMY OPERACYJNE\nNa czym polega problem szeregowania procesów?", a: "Dotyczy wyboru kolejności wykonywania procesów dla maksymalnej efektywności." },

  { q: "SYSTEMY OPERACYJNE\nCzym jest synchronizacja procesów i wątków?", a: "Zapobiega konfliktom dostępu do zasobów przy użyciu mutexów, semaforów i monitorów." },

  { q: "SYSTEMY OPERACYJNE\nJakie są mechanizmy zarządzania pamięcią operacyjną?", a: "Segmentacja, stronicowanie, alokacja dynamiczna." },

  { q: "SYSTEMY OPERACYJNE\nCzym jest pamięć wirtualna i jakie ma wady i zalety?", a: "Pamięć wirtualna umożliwia użycie dysku jako rozszerzenia RAM, zwiększając elastyczność kosztem wydajności." }
];


export default questions
