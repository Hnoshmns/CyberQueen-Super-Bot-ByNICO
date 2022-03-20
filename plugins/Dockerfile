FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ussanna-epa-uba-left/qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm-you-left /root/CyberQueen
WORKDIR /root/CyberQueen/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "cyberqueen.js"]
