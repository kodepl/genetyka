---
title: "Jak działa tracker? W co się pakujesz przy każdym wejściu"
description: "Zrozum, co dzieje się z Twoimi danymi przy korzystaniu z trackerów w Internecie."
pubDate: "2026-09-21"
author: "Dr hab. Magdalena Wójcik"
authorBio: "Genetyczka kliniczna i popularyzatorka nauki. Pisze o badaniach DNA, dziedziczeniu i diagnostyce."
category: "Zdrowie"
tags: ["prywatność", "tracker", "cookies"]
readingTime: "5 min"
image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&h=900&q=80"
---

## Jak działa tracker? W co się pakujesz przy każdym wejściu

Wyobraź sobie, że klikasz w link do artykułu. W tym momencie na stronie ładowany jest skrypt lub mały piksel 1x1, który ma za zadanie odnotować Twoją wizytę. To działanie na pozór niewinne, a jednak za kulisami zachodzą procesy, które mogą budzić wątpliwości dotyczące prywatności.

Każda przeglądarka internetowa dodaje do żądania HTTP Twoje IP oraz user-agent, co pozwala na identyfikację Twojego urządzenia. Skrypt trackera rejestruje również adres artykułu, z którego przybywasz, nazwę zdarzenia (najczęściej 'page_view') oraz unikalny identyfikator, który często znajduje się w ciasteczku, takim jak _ga przy Google Analytics czy _fbp przy pikselu Meta. W niektórych przypadkach identyfikator może być przechowywany w localStorage, co sprawia, że lista ciasteczek pozostaje pusta, a identyfikator nadal jest dostępny w parametrze.

Przykładowy adres żądania może wyglądać tak: `collect.example.invalid/g/collect?dl=adres_artykulu&dr=strona_poprzednia&en=page_view&cid=identyfikator`. , że pierwsze wejście na stronę często generuje nowy identyfikator. Dlatego przy kolejnym wejściu na tę samą domenę możesz zobaczyć ten sam cid, ale z innym URL-em. Zlepianie ścieżki na stronie bierze się z drugiego żądania, co oznacza, że nie jest to efekt jednego piksela.

Warto również mieć na uwadze, że żądanie trackera wychodzi z Twojego urządzenia, zanim zdecydujesz się zaakceptować cookies. Zamykanie okna z krzyżykiem nie cofa tego działania. Geolokalizacja na podstawie IP nie jest tak precyzyjna jak GPS. Często twierdzenie, że jesteś w konkretnym mieście, może być mylące.

Przy każdym wejściu do artykułu dobrze jest sprawdzić, jakie dane są wysyłane. Można to zrobić, otwierając okno prywatne w przeglądarce i korzystając z zakładki 'Sieć'. Warto zwrócić uwagę na obce domeny oraz ścieżki takie jak collect, pixel czy g/collect, zanim zdecydujesz się na kliknięcie w baner zgody na przetwarzanie danych.

Wszystkie te informacje pokazują, że identyfikator, który widzisz w żądaniu trackera, to nie Twoje nazwisko, lecz znacznik przeglądarki. Powinno to skłonić do refleksji na temat danych, które są zbierane w Internecie. Jeśli chcesz dowiedzieć się więcej na ten temat, możesz przeczytać artykuł o tym, co [identyfikator w żądaniu trackera](https://www.blackweb.pl/blog/co-tracker-wysyla-przy-jednym-wejscie) wysyła przy jednym wejściu. 

Zrozumienie, jak działają trackery, to klucz do świadomego korzystania z Internetu i ochrony swojej prywatności. Warto mieć na uwadze, że każdy kliknięcie może wiązać się z przekazaniem danych, które nie zawsze są dla nas korzystne.
