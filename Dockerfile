FROM fusuf/whatsasena:latest

RUN git clone https://github.com/SLTechnicalTips/CyberQueen /root/CyberQueen
WORKDIR /root/CyberQueen/
ENV TZ=Asia/Kebithigollewa
RUN npm install supervisor -g
RUN yarn install --no-audit
## CyberQueen
CMD ["node", "cyberqueen.js"]
