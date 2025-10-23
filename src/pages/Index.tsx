import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const tutorials = [
    {
      title: "Основы хакинга",
      description: "Познакомься с базовыми концепциями и инструментами этичного хакинга",
      icon: "Code2",
      level: "Начальный",
      duration: "2 часа"
    },
    {
      title: "Сетевая безопасность",
      description: "Изучи методы защиты и тестирования сетевой инфраструктуры",
      icon: "Network",
      level: "Средний",
      duration: "3 часа"
    },
    {
      title: "Web-пентестинг",
      description: "Научись находить и эксплуатировать уязвимости веб-приложений",
      icon: "Globe",
      level: "Средний",
      duration: "4 часа"
    },
    {
      title: "Криптография",
      description: "Разберись в шифровании и методах защиты данных",
      icon: "Lock",
      level: "Продвинутый",
      duration: "5 часов"
    },
    {
      title: "Reverse Engineering",
      description: "Освой анализ и декомпиляцию программного обеспечения",
      icon: "Binary",
      level: "Продвинутый",
      duration: "6 часов"
    },
    {
      title: "Social Engineering",
      description: "Изучи психологические методы получения информации",
      icon: "Users",
      level: "Начальный",
      duration: "2 часа"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyber opacity-20 blur-3xl"></div>
        
        <section className="relative container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-6">
              <Icon name="Zap" size={16} className="text-primary" />
              <span className="text-sm font-inter text-muted-foreground">Этичный хакинг и кибербезопасность</span>
            </div>
            
            <h1 className="font-poppins font-bold text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-cyber bg-clip-text text-transparent">
              HACKOGRAM
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-inter">
              Обучающая платформа для начинающих и продвинутых специалистов по информационной безопасности
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full font-poppins font-semibold animate-glow"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать обучение
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6 rounded-full font-poppins font-semibold"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </section>

        <section className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
              Обучающие материалы
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Выбери направление и начни свой путь в кибербезопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card 
                key={index}
                className="group relative p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-in-right overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon name={tutorial.icon} size={28} className="text-primary" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-inter font-semibold bg-accent/20 text-accent">
                      {tutorial.level}
                    </span>
                  </div>
                  
                  <h3 className="font-poppins font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter text-sm mb-4 line-clamp-2">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span className="font-inter">{tutorial.duration}</span>
                    </div>
                    
                    <Icon 
                      name="ArrowRight" 
                      size={20} 
                      className="text-primary group-hover:translate-x-2 transition-transform" 
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto bg-card border border-primary/20 rounded-3xl p-12 animate-fade-in">
            <Icon name="Shield" size={64} className="text-primary mx-auto mb-6" />
            
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Готов начать свой путь?
            </h2>
            
            <p className="text-lg text-muted-foreground font-inter mb-8">
              Присоединяйся к тысячам студентов, которые уже освоили основы кибербезопасности
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-cyber hover:opacity-90 text-lg px-10 py-6 rounded-full font-poppins font-semibold"
            >
              Создать аккаунт бесплатно
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
