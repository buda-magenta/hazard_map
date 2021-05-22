---
layout: page
title: Hazard Map Project
---

Welcome to the Hazard Map project carried out at the Indian Institute of Science Education and Research (IISER), Pune. This project has created a hazard map for India arising due to spread of infectious diseases. This project was funded by a special MATRICS grant of the Science and Engineering Research Board (SERB), Government of India.

Suppose an infectious disease outbreak is reported in some city/town in India, which other cities/towns are in the risk of getting the infection ? This project has produced a map of the risk faced by 446 cities and towns in India with a population of 1 lakh or more.

This project is not about predicting the number of infection cases, case loads or severity of infection.

The Hazard rank (shown in the hazard map) indicates the risk faced by the cities/towns in India due to spreading infection. Given an outbreak location, a hazard rank is assigned to each one of the cities/towns with respect to that outbreak location.

A city/town with a lower rank has the higher risk, compared to a city/town with a higher rank. For example, with respect to some outbreak location, if Bangalore is assigned rank 5, and Hyderabad is given rank 8. Then, Bangalore is at a higher risk of getting the infection than Hyderabad. This means that Bangalore is more likely to get the infection first before Hyderabad gets it.

"The basic idea behind the algorithm is fairly simple : mobility of people is responsible for the spread of infection. Then, if mobility patterns of people are known, the geographical spread of infection can be mapped out."

A hazard rank is assigned using a combination of mathematical models and use of transportation and mobility data. A compartmental infectious disease spreading model, the SIR model, augmented with India's long distance transportation network and real mobility data is employed for this purpose. Data from three major modes of transport - trains, air, and roads - are used in this work. However, the local mobility within a city or even district is not taken into account.

For a technical description of the hazard map project and work, please read our paper at arXiv link. Note that as of 25 May 2021, this paper has been submitted for publication, but is not published yet.