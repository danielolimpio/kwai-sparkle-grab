import {
  AlertTriangle, Shield, BookOpen, Eye, Users, Heart, GraduationCap, Archive,
  Lock, Ban, Scale, ShieldAlert, FileWarning, Gavel, CheckCircle, XCircle,
  HelpCircle, Mail, Clock, FileText, Info, ChevronRight
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Link } from "react-router-dom";

export default function UsoResponsavel() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Documento Legal</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">
          Termos de Uso e Política de Download Responsável
        </h1>
        <p className="text-muted-foreground mb-8">Última atualização: 08 de abril de 2026</p>

        <div className="space-y-8">
          {/* 1. Aviso Legal */}
          <Section icon={AlertTriangle} title="1. Aviso Legal Importante">
            <p>Esta ferramenta é fornecida exclusivamente para uso pessoal, privado, educacional e sem fins lucrativos. Ao acessar e utilizar nossos serviços, você declara estar ciente e concordar em cumprir integralmente as leis de direitos autorais vigentes, os termos de serviço das plataformas originais e todas as disposições aqui estabelecidas.</p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 mt-3">
              <p className="text-sm font-medium text-foreground">O descumprimento destas diretrizes pode resultar em responsabilização civil e criminal conforme a legislação brasileira e internacional aplicável.</p>
            </div>
          </Section>

          {/* 2. Finalidade */}
          <Section icon={BookOpen} title="2. Finalidade Legítima da Ferramenta">
            <p>Nossa plataforma foi desenvolvida para atender a necessidades reais e legítimas de usuários que enfrentam limitações técnicas, geográficas ou pessoais no acesso a conteúdo online.</p>

            <SubSection icon={Eye} title="2.1. Acessibilidade e Conectividade Limitada">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Áreas com infraestrutura precária:</strong> Usuários que residem em regiões com internet instável, lenta ou intermitente, onde o streaming não é viável</li>
                <li><strong>Economia de dados móveis:</strong> Pessoas que utilizam planos de dados limitados e precisam otimizar o consumo</li>
                <li><strong>Profissionais em trânsito:</strong> Trabalhadores que viajam frequentemente e permanecem longos períodos sem conexão adequada</li>
                <li><strong>Estudantes de zonas rurais:</strong> Alunos que necessitam de material educacional offline</li>
                <li><strong>Navegação em transporte público:</strong> Pessoas que utilizam metrôs, ônibus ou aviões onde a conexão é indisponível</li>
              </ul>
            </SubSection>

            <SubSection icon={Heart} title="2.2. Necessidades Especiais e Terapêuticas">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Crianças e adultos com necessidades especiais:</strong> Famílias que utilizam vídeos educativos e terapêuticos como parte do desenvolvimento e tratamento</li>
                <li><strong>Terapias e reabilitação:</strong> Pacientes em processos terapêuticos que necessitam de conteúdo específico</li>
                <li><strong>Acesso offline em consultórios:</strong> Profissionais da saúde que trabalham em locais com conectividade limitada</li>
                <li><strong>Inclusão digital:</strong> Pessoas com dificuldades de aprendizado que necessitam revisar conteúdos múltiplas vezes</li>
              </ul>
            </SubSection>

            <SubSection icon={GraduationCap} title="2.3. Educação e Desenvolvimento Pessoal">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Estudo e pesquisa:</strong> Estudantes que precisam de material para revisão e trabalhos acadêmicos</li>
                <li><strong>Capacitação profissional:</strong> Trabalhadores que buscam aperfeiçoamento através de tutoriais offline</li>
                <li><strong>Aprendizado de idiomas:</strong> Pessoas que estudam línguas estrangeiras e necessitam de conteúdo para prática repetitiva</li>
                <li><strong>Hobbies e habilidades manuais:</strong> Entusiastas que aprendem novas técnicas através de tutoriais</li>
                <li><strong>Preparação de aulas:</strong> Educadores que preparam material didático em locais sem acesso à internet</li>
              </ul>
            </SubSection>

            <SubSection icon={Archive} title="2.4. Preservação de Memórias e Conteúdo Pessoal">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Backup de momentos especiais:</strong> Preservar vídeos de família, casamentos, aniversários e formaturas</li>
                <li><strong>Conteúdo próprio:</strong> Criadores que desejam fazer cópia de segurança de seus próprios vídeos</li>
                <li><strong>Documentação histórica:</strong> Guardar registros importantes que podem ser removidos das plataformas originais</li>
                <li><strong>Arquivo pessoal:</strong> Manter em dispositivo próprio conteúdos com valor sentimental ou histórico</li>
              </ul>
            </SubSection>

            <SubSection icon={Lock} title="2.5. Privacidade e Segurança">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Proteção de dados pessoais:</strong> Evitar rastreamento excessivo de hábitos de visualização</li>
                <li><strong>Controle de privacidade:</strong> Assistir conteúdos sem deixar histórico em plataformas online</li>
                <li><strong>Segurança da informação:</strong> Profissionais que lidam com informações confidenciais e preferem conteúdo offline</li>
                <li><strong>Evitar algoritmos:</strong> Usuários que não desejam ter seus interesses mapeados por sistemas de recomendação</li>
              </ul>
            </SubSection>
          </Section>

          {/* 3. Proibições */}
          <Section icon={Ban} title="3. O Que é Estritamente Proibido">
            <SubSection icon={ShieldAlert} title="3.1. Violação de Direitos Autorais">
              <p className="font-medium text-foreground mb-2">É expressamente vedado:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Baixar músicas, filmes, séries, documentários ou qualquer conteúdo protegido sem autorização expressa dos titulares</li>
                <li>Utilizar a ferramenta para contornar sistemas de proteção contra cópia (DRM)</li>
                <li>Acessar conteúdo pago ou restrito sem a devida licença ou assinatura</li>
                <li>Violar marcas registradas, direitos de imagem, voz ou propriedade intelectual de terceiros</li>
              </ul>
            </SubSection>

            <SubSection icon={XCircle} title="3.2. Redistribuição e Compartilhamento">
              <p className="font-medium text-foreground mb-2">Não permitimos:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Republicar vídeos baixados em outras plataformas (YouTube, TikTok, Instagram, Facebook, Kwai, Vimeo, etc.)</li>
                <li>Compartilhar arquivos em redes sociais, grupos de mensagens, fóruns ou sites</li>
                <li>Fazer upload em servidores de armazenamento para distribuição</li>
                <li>Incorporar vídeos baixados em sites, blogs ou aplicações sem autorização</li>
                <li>Transmitir ou exibir publicamente o conteúdo baixado</li>
              </ul>
            </SubSection>

            <SubSection icon={Ban} title="3.3. Uso Comercial e Lucrativo">
              <p className="font-medium text-foreground mb-2">É proibido:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Utilizar vídeos baixados para fins comerciais, publicitários ou promocionais</li>
                <li>Lucrar direta ou indiretamente com conteúdo de terceiros</li>
                <li>Incluir vídeos em produtos vendidos ou distribuídos</li>
                <li>Usar em campanhas de marketing ou material corporativo sem licença</li>
                <li>Monetizar conteúdo em plataformas que geram receita</li>
              </ul>
            </SubSection>

            <SubSection icon={FileWarning} title="3.4. Usos Ilícitos e Danosos">
              <p className="font-medium text-foreground mb-2">Não toleramos:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Utilizar vídeos para assédio, perseguição, difamação, calúnia ou injúria</li>
                <li>Violar privacidade, intimidade ou honra de terceiros</li>
                <li>Criar deepfakes, manipulações ou edições enganosas</li>
                <li>Praticar discurso de ódio, discriminação ou apologia à violência</li>
                <li>Realizar qualquer atividade ilegal, fraudulenta ou que viole direitos fundamentais</li>
              </ul>
            </SubSection>

            <SubSection icon={Lock} title="3.5. Contorno de Medidas de Proteção">
              <p className="font-medium text-foreground mb-2">É vedado:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Burlar restrições de privacidade (baixar vídeos privados sem autorização)</li>
                <li>Acessar contas de terceiros para realizar downloads</li>
                <li>Utilizar métodos automatizados em massa (bots, scrapers)</li>
                <li>Violar medidas tecnológicas de proteção implementadas pelas plataformas originais</li>
              </ul>
            </SubSection>
          </Section>

          {/* 4. Responsabilidades */}
          <Section icon={Users} title="4. Suas Responsabilidades e Obrigações">
            <SubSection icon={Eye} title="4.1. Verificação Prévia">
              <CheckList items={[
                "Confirmar se possui direito legal de baixar o conteúdo",
                "Verificar se o vídeo possui restrições de uso ou licenciamento específico",
                "Assegurar-se de que o download não viola termos de serviço da plataforma de origem",
                "Confirmar que o uso pretendido está em conformidade com a legislação aplicável",
              ]} />
            </SubSection>

            <SubSection icon={CheckCircle} title="4.2. Uso Adequado">
              <CheckList items={[
                "Utilizar os vídeos baixados exclusivamente para fins pessoais e privados",
                "Manter o conteúdo em dispositivos de acesso restrito e seguro",
                "Não remover marcas d'água, créditos ou informações de autoria dos vídeos",
                "Respeitar a integridade do conteúdo original sem distorções prejudiciais",
                "Apoiar os criadores originais através de interações positivas",
              ]} />
            </SubSection>

            <SubSection icon={Lock} title="4.3. Armazenamento Seguro">
              <CheckList items={[
                "Guardar os arquivos em local seguro e de acesso controlado",
                "Não compartilhar senhas ou acesso aos dispositivos onde os vídeos estão armazenados",
                "Excluir conteúdos quando solicitado pelos titulares dos direitos",
                "Manter registro de autorizações quando aplicável",
              ]} />
            </SubSection>

            <SubSection icon={Scale} title="4.4. Conformidade Legal">
              <CheckList items={[
                "Cumprir a Lei de Direitos Autorais (Lei 9.610/98)",
                "Observar o Marco Civil da Internet (Lei 12.965/14)",
                "Respeitar a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/18)",
                "Atender à legislação penal e civil aplicável",
                "Seguir os termos de uso das plataformas originais",
              ]} />
            </SubSection>
          </Section>

          {/* 5. Isenção */}
          <Section icon={Shield} title="5. Isenção de Responsabilidade da Plataforma">
            <SubSection icon={Info} title="5.1. Natureza da Ferramenta">
              <p>Nossa plataforma funciona como um meio técnico neutro — similar a um navegador web, player de vídeo ou ferramenta de busca. Não criamos, hospedamos, distribuímos ou controlamos o conteúdo original das plataformas de terceiros.</p>
            </SubSection>

            <SubSection icon={ShieldAlert} title="5.2. Limitação de Responsabilidade">
              <p className="font-medium text-foreground mb-2">Não somos responsáveis por:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Como você utiliza os vídeos após o download</li>
                <li>Violações de direitos autorais cometidas pelos usuários</li>
                <li>Consequências legais, civis ou criminais do uso inadequado</li>
                <li>Conteúdo original das plataformas de origem</li>
                <li>Precisão, qualidade, legalidade ou adequação do conteúdo baixado</li>
                <li>Danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso</li>
              </ul>
            </SubSection>

            <SubSection icon={AlertTriangle} title="5.3. Ausência de Endosso">
              <p>A disponibilidade desta ferramenta não constitui endosso ou aprovação do conteúdo das plataformas originais, autorização para violar direitos de terceiros, permissão para uso comercial ou redistribuição, ou garantia de legalidade do download em todas as jurisdições.</p>
            </SubSection>

            <SubSection icon={Scale} title="5.4. Variações Jurídicas">
              <p>As leis de direitos autorais variam significativamente entre países. É sua responsabilidade verificar a legalidade do download em sua jurisdição específica e consultar um advogado especializado em caso de dúvidas.</p>
            </SubSection>
          </Section>

          {/* 6. Direitos Autorais */}
          <Section icon={FileText} title="6. Direitos Autorais e Exceções Legais">
            <SubSection icon={Shield} title="6.1. O Que é Protegido por Direitos Autorais">
              <p className="mb-2">Conforme a Lei 9.610/98, estão protegidos:</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Obras audiovisuais (filmes, vídeos, documentários)</li>
                <li>Composições musicais e gravações sonoras</li>
                <li>Obras fotográficas e imagens</li>
                <li>Textos, roteiros e narrativas</li>
                <li>Coreografias e obras cênicas</li>
                <li>Programas de computador e softwares</li>
                <li>Qualquer criação expressa por qualquer meio</li>
              </ul>
            </SubSection>

            <SubSection icon={BookOpen} title="6.2. Exceções e Limitações (Uso Justo)">
              <p className="mb-2">A legislação brasileira prevê algumas exceções limitadas:</p>
              <CheckList items={[
                "Citação para estudo, crítica ou polêmica (com indicação do autor e origem)",
                "Uso em estabelecimentos de ensino para fins didáticos",
                "Reprodução de pequenos trechos para uso privado do copista",
                "Acesso para deficientes visuais ou auditivos",
                "Cópia de segurança de programas de computador",
              ]} />
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-3">
                <p className="text-sm font-medium text-foreground">Importante: Estas exceções são restritas e específicas. Não constituem autorização geral para download indiscriminado.</p>
              </div>
            </SubSection>

            <SubSection icon={CheckCircle} title="6.3. Domínio Público e Licenças Livres">
              <p className="mb-2">Você pode baixar quando:</p>
              <CheckList items={[
                "O conteúdo estiver em domínio público (geralmente 70 anos após morte do autor)",
                "Possuir licença Creative Commons que permita download e uso",
                "O autor tiver autorizado explicitamente o download e redistribuição",
                "For conteúdo de sua própria autoria",
              ]} />
            </SubSection>
          </Section>

          {/* 7. DMCA */}
          <Section icon={Gavel} title="7. Política de Notificação e Remoção (DMCA)">
            <SubSection icon={Shield} title="7.1. Respeito aos Direitos dos Criadores">
              <p>Respeitamos integralmente os direitos dos titulares de propriedade intelectual e agimos prontamente mediante notificação válida de violação.</p>
            </SubSection>

            <SubSection icon={Mail} title="7.2. Como Enviar uma Notificação">
              <p className="mb-3">Se você é detentor de direitos autorais, envie uma notificação contendo:</p>
              <div className="bg-card border border-border rounded-xl p-4 space-y-2 text-sm text-muted-foreground">
                <p><strong>Destinatário:</strong> dmca@baixarvideoskwai.com</p>
                <p><strong>Identificação da obra protegida:</strong> Descrição detalhada do conteúdo original</p>
                <p><strong>URL do conteúdo infringente:</strong> Link específico que viola seus direitos</p>
                <p><strong>Prova de titularidade:</strong> Documentação que comprove sua propriedade</p>
                <p><strong>Declaração de boa-fé:</strong> Afirmação de que o uso não foi autorizado</p>
                <p><strong>Informações de contato:</strong> Nome completo, endereço, telefone e e-mail</p>
                <p><strong>Assinatura:</strong> Física ou eletrônica do titular ou representante legal</p>
              </div>
            </SubSection>

            <SubSection icon={Clock} title="7.3. Prazos e Procedimentos">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <InfoCard label="Análise inicial" value="Até 48 horas úteis" />
                <InfoCard label="Ação de remoção" value="Imediata após confirmação" />
                <InfoCard label="Notificação ao usuário" value="Quando aplicável" />
                <InfoCard label="Contranotificação" value="Até 10 dias úteis" />
              </div>
            </SubSection>

            <SubSection icon={AlertTriangle} title="7.4. Notificações Falsas">
              <p>Notificações falsas ou de má-fé podem resultar em responsabilização civil por danos materiais e morais, ações judiciais por abuso de direito e indenização por perdas e danos causados.</p>
            </SubSection>
          </Section>

          {/* 8. Sanções */}
          <Section icon={Gavel} title="8. Sanções e Consequências do Descumprimento">
            <SubSection icon={ShieldAlert} title="8.1. Medidas da Plataforma">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Suspender ou encerrar contas de usuários reincidentes</li>
                <li>Bloquear acesso a endereços IP que violem reiteradamente os termos</li>
                <li>Remover links ou funcionalidades mediante notificação válida</li>
                <li>Cooperar com autoridades mediante ordem judicial</li>
                <li>Manter registros de atividade para fins de conformidade legal</li>
              </ul>
            </SubSection>

            <SubSection icon={Scale} title="8.2. Consequências Legais">
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">Responsabilidade Civil</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Indenização por danos materiais (lucros cessantes, danos emergentes)</li>
                    <li>Compensação por danos morais</li>
                    <li>Perda de equipamentos utilizados na violação</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">Responsabilidade Criminal (Art. 184 do Código Penal)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Detenção de 3 meses a 1 ano (violação simples)</li>
                    <li>Reclusão de 2 a 4 anos (violação com fins lucrativos)</li>
                    <li>Multa proporcional ao dano causado</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">Responsabilidade Administrativa</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Multas aplicadas por órgãos de fiscalização</li>
                    <li>Bloqueio de sites e aplicações</li>
                    <li>Inclusão em cadastros restritivos</li>
                  </ul>
                </div>
              </div>
            </SubSection>
          </Section>

          {/* 9. Boas Práticas */}
          <Section icon={CheckCircle} title="9. Recomendações de Boas Práticas">
            <SubSection icon={Eye} title="9.1. Antes de Baixar">
              <CheckList items={[
                'Pergunte-se: "Eu tenho direito legal de baixar este conteúdo?"',
                "Verifique: O vídeo é de minha autoria? Tenho autorização por escrito?",
                "Considere: O criador oferece download oficial? Há opção de compra?",
                "Avalie: Meu uso se enquadra em exceções legais específicas?",
              ]} />
            </SubSection>

            <SubSection icon={CheckCircle} title="9.2. Após o Download">
              <CheckList items={[
                "Armazene com segurança em dispositivo pessoal e protegido",
                "Não compartilhe — mantenha o arquivo em uso estritamente pessoal",
                "Dê créditos quando for pertinente e autorizado",
                "Apoie o criador: curta, inscreva-se, compartilhe oficialmente",
                "Exclua quando necessário se receber notificação ou perder autorização",
              ]} />
            </SubSection>

            <SubSection icon={Info} title="9.3. Alternativas Legais">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Assinaturas oficiais:</strong> YouTube Premium, Netflix, Spotify, etc.</li>
                <li><strong>Download oficial:</strong> Muitas plataformas oferecem download dentro do app</li>
                <li><strong>Conteúdo gratuito legal:</strong> Creative Commons, domínio público, autorizações</li>
                <li><strong>Bibliotecas e instituições:</strong> Acesso gratuito a acervos educacionais</li>
                <li><strong>Contato direto com criadores:</strong> Solicite autorização por e-mail ou redes sociais</li>
              </ul>
            </SubSection>
          </Section>

          {/* 10. FAQ */}
          <Section icon={HelpCircle} title="10. Perguntas Frequentes (FAQ)">
            <div className="space-y-4">
              <FaqItem q="Posso baixar vídeos para assistir offline?" a="Sim, desde que seja para uso estritamente pessoal, você tenha direito legal sobre o conteúdo ou esteja amparado por exceções legais específicas." />
              <FaqItem q="É permitido baixar meus próprios vídeos?" a="Sim, você pode baixar vídeos de sua própria autoria para backup e uso pessoal." />
              <FaqItem q="Posso usar vídeos baixados em trabalhos escolares?" a="A legislação permite citação para fins didáticos, mas com limitações. Consulte seu educador sobre as regras específicas da instituição." />
              <FaqItem q="É crime baixar vídeos do Kwai?" a="Depende do uso. Para visualização pessoal de conteúdo público, geralmente não há crime. Porém, redistribuir, lucrar ou violar direitos autorais é ilegal." />
              <FaqItem q="O que acontece se eu republicar um vídeo baixado?" a="Você pode receber notificação de remoção, ter sua conta suspensa na plataforma, e ser responsabilizado civil e criminalmente por violação de direitos autorais." />
              <FaqItem q="Como sei se um vídeo está protegido por direitos autorais?" a="Praticamente todo conteúdo criativo está automaticamente protegido. A ausência de símbolo © não significa que é livre. Na dúvida, presuma que está protegido." />
              <FaqItem q="Posso baixar se o vídeo não tem marca d'água?" a="A ausência de marca d'água não indica ausência de direitos autorais. A proteção é automática pela criação da obra." />
              <FaqItem q="E se o criador não se manifestar contra?" a="A tolerância não significa autorização. O titular pode exercer seus direitos a qualquer momento, mesmo que tenha permitido anteriormente." />
            </div>
          </Section>

          {/* 11. Atualizações */}
          <Section icon={Clock} title="11. Atualizações e Modificações">
            <p>Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio, para adequação a mudanças legais, tecnológicas ou operacionais.</p>
            <p>Versões atualizadas serão publicadas nesta página com data de vigência. O uso continuado da ferramenta após alterações constitui aceitação dos novos termos.</p>
            <p>Recomendamos que você revise periodicamente esta página para se manter informado sobre suas responsabilidades e direitos.</p>
          </Section>

          {/* 12. Contato */}
          <Section icon={Mail} title="12. Contato e Suporte">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <InfoCard label="Dúvidas gerais" value="legal@baixarvideoskwai.com" />
              <InfoCard label="Notificações DMCA" value="dmca@baixarvideoskwai.com" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <InfoCard label="Dúvidas gerais" value="Até 5 dias úteis" />
              <InfoCard label="Notificações DMCA" value="Até 48h úteis" />
              <InfoCard label="Urgências legais" value="Imediatamente" />
            </div>
          </Section>

          {/* 13. Disposições Finais */}
          <Section icon={FileText} title="13. Disposições Finais">
            <p className="mb-2">Estes termos são regidos pelas leis da República Federativa do Brasil, especialmente:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
              <li>Lei de Direitos Autorais (Lei 9.610/98)</li>
              <li>Marco Civil da Internet (Lei 12.965/14)</li>
              <li>Código Civil (Lei 10.406/02)</li>
              <li>Código Penal (Decreto-Lei 2.848/40)</li>
            </ul>
            <p>Se qualquer disposição destes termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito. A falta de exigência do cumprimento de qualquer disposição não constitui renúncia a tal direito.</p>
          </Section>

          {/* 14. Aceite */}
          <Section icon={CheckCircle} title="14. Aceite dos Termos">
            <p className="mb-3">Ao clicar no botão "Baixar" ou utilizar qualquer funcionalidade desta plataforma, você declara que:</p>
            <CheckList items={[
              "Leu e compreendeu integralmente estes termos",
              "Concorda em cumprir todas as disposições aqui estabelecidas",
              "Assume total responsabilidade pelo uso da ferramenta",
              "Está ciente das consequências do descumprimento",
              "Possui capacidade legal para celebrar este acordo",
            ]} />
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4 space-y-2 text-sm text-muted-foreground">
              <p><strong>Menores de Idade:</strong> Menores de 18 anos devem obter consentimento dos pais ou responsáveis legais antes de utilizar esta ferramenta.</p>
              <p><strong>Uso Profissional:</strong> Profissionais devem consultar assessoria jurídica especializada antes de utilizar a ferramenta em contextos institucionais.</p>
            </div>
          </Section>

          {/* Resumo Prático */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Resumo Prático</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Pode Baixar Quando
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" /> É seu próprio conteúdo</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Tem autorização por escrito do titular</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Está em domínio público</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Possui licença Creative Commons adequada</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" /> É para uso estritamente pessoal e privado</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Se enquadra em exceções legais específicas</li>
                </ul>
              </div>

              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  Não Pode Baixar Quando
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-destructive shrink-0" /> É conteúdo protegido sem autorização</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-destructive shrink-0" /> Pretende redistribuir ou compartilhar</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-destructive shrink-0" /> Vai usar para fins comerciais</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-destructive shrink-0" /> É conteúdo privado de terceiros</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-destructive shrink-0" /> Viola termos da plataforma original</li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 text-destructive shrink-0" /> É para exibição pública</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
              <h3 className="font-bold text-foreground mb-2 flex items-center justify-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Na Dúvida
              </h3>
              <p className="text-sm text-muted-foreground">Não baixe. Consulte um advogado. <Link to="/contato" className="text-primary font-semibold hover:underline">Entre em contato conosco</Link>. Busque alternativas legais.</p>
            </div>
          </div>

          {/* Final Note */}
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Lembre-se:</strong> Esta ferramenta é um recurso técnico para facilitar o acesso offline a conteúdos que você tem direito legal de acessar. O respeito aos direitos autorais e aos criadores de conteúdo é fundamental para um ecossistema digital justo e sustentável. Apoie os criadores que você admira através de meios oficiais.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

/* ── Helper components ── */

function Section({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="gradient-kwai p-2 rounded-lg">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function SubSection({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 pl-2 border-l-2 border-primary/20">
      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        {title}
      </h3>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-muted-foreground">
          <CheckCircle className="h-4 w-4 mt-0.5 text-primary shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-muted/30 border border-border rounded-xl p-4">
      <p className="font-semibold text-foreground mb-1">{q}</p>
      <p className="text-sm text-muted-foreground">{a}</p>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-muted/30 border border-border rounded-xl p-3 text-center">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}
